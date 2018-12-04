<?php
/**
 * This file is part of EspoCRM and/or TreoPIM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2018 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * TreoPIM is EspoCRM-based Open Source Product Information Management application.
 * Copyright (C) 2017-2018 TreoLabs GmbH
 * Website: http://www.treopim.com
 *
 * TreoPIM as well as EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TreoPIM as well as EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "EspoCRM" word
 * and "TreoPIM" word.
 */

namespace Espo\Entities;

class Email extends \Espo\Core\ORM\Entity
{
    protected function _getSubject()
    {
        return $this->get('name');
    }

    protected function _setSubject($value)
    {
        $this->set('name', $value);
    }

    protected function _hasSubject()
    {
        return $this->has('name');
    }

    protected function _setIsRead($value)
    {
        $this->setValue('isRead', $value !== false);
        if ($value === true || $value === false) {
            $this->setValue('isUsers', true);
        } else {
            $this->setValue('isUsers', false);
        }
    }

    public function isManuallyArchived()
    {
        return $this->get('status') === 'Archived' && $this->get('createdById') !== 'system';
    }

    public function addAttachment(\Espo\Entities\Attachment $attachment)
    {
        if (!empty($this->id)) {
            $attachment->set('parentId', $this->id);
            $attachment->set('parentType', 'Email');
            if ($this->entityManager->saveEntity($attachment)) {
                return true;
            }
        }
    }

    protected function _getBodyPlain()
    {
        return $this->getBodyPlain();
    }

    public function hasBodyPlain()
    {
        return !empty($this->valuesContainer['bodyPlain']);
    }

    public function getBodyPlain()
    {
        if (!empty($this->valuesContainer['bodyPlain'])) {
            return $this->valuesContainer['bodyPlain'];
        }

        $body = $this->get('body');

        $breaks = array("<br />","<br>","<br/>","<br />","&lt;br /&gt;","&lt;br/&gt;","&lt;br&gt;");
        $body = str_ireplace($breaks, "\r\n", $body);
        $body = strip_tags($body);

        $reList = [
            '/&(quot|#34);/i',
            '/&(amp|#38);/i',
            '/&(lt|#60);/i',
            '/&(gt|#62);/i',
            '/&(nbsp|#160);/i',
            '/&(iexcl|#161);/i',
            '/&(cent|#162);/i',
            '/&(pound|#163);/i',
            '/&(copy|#169);/i',
            '/&(reg|#174);/i'
        ];
        $replaceList = [
            '',
            '&',
            '<',
            '>',
            ' ',
            chr(161),
            chr(162),
            chr(163),
            chr(169),
            chr(174)
        ];

        $body = preg_replace($reList, $replaceList, $body);

        return $body;
    }

    public function getBodyPlainForSending()
    {
        return $this->getBodyPlain();
    }

    public function getBodyForSending()
    {
        $body = $this->get('body');
        if (!empty($body)) {
            $attachmentList = $this->getInlineAttachments();
            foreach ($attachmentList as $attachment) {
                $body = str_replace("?entryPoint=attachment&amp;id={$attachment->id}", "cid:{$attachment->id}", $body);
            }
        }

        $body = str_replace("<table class=\"table table-bordered\">", "<table class=\"table table-bordered\" width=\"100%\">", $body);

        return $body;
    }

    public function getInlineAttachments()
    {
        $attachmentList = array();
        $body = $this->get('body');
        if (!empty($body)) {
            if (preg_match_all("/\?entryPoint=attachment&amp;id=([^&=\"']+)/", $body, $matches)) {
                if (!empty($matches[1]) && is_array($matches[1])) {
                    foreach($matches[1] as $id) {
                        $attachment = $this->entityManager->getEntity('Attachment', $id);
                        if ($attachment) {
                            $attachmentList[] = $attachment;
                        }
                    }
                }
            }

        }
        return $attachmentList;
    }

    public function getToList()
    {
        $value = $this->get('to');
        if ($value) {
            $arr = explode(';', $value);
            if (is_array($arr)) {
                return $arr;
            }
        }
        return [];
    }

    public function getCcList()
    {
        $value = $this->get('cc');
        if ($value) {
            $arr = explode(';', $value);
            if (is_array($arr)) {
                return $arr;
            }
        }
        return [];
    }

    public function getBccList()
    {
        $value = $this->get('bcc');
        if ($value) {
            $arr = explode(';', $value);
            if (is_array($arr)) {
                return $arr;
            }
        }
        return [];
    }

    public function getReplyToList()
    {
        $value = $this->get('replyTo');
        if ($value) {
            $arr = explode(';', $value);
            if (is_array($arr)) {
                return $arr;
            }
        }
        return [];
    }

    public function setDummyMessageId()
    {
        $this->set('messageId', 'dummy:' . \Espo\Core\Utils\Util::generateId());
    }
}
