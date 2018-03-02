<?php
/**
 * This file is part of EspoCRM and/or TreoPIM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2018 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * TreoPIM ist Open Source Product Information Managegement (PIM) application,
 * based on EspoCRM.
 * Copyright (C) 2017-2018 Zinit Solutions GmbH
 * Website: http://www.treopim.com
 *
 * TreoPIM as well es EspoCRM is free software: you can redistribute it and/or modify
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

namespace Espo\Modules\Pim\Core\Services;

use Espo\Core\Templates\Services\Base;
use Espo\Core\Exceptions;
use Espo\Core\Templates\Entities\Base as BaseEntity;

/**
 * Class of AbstractImageService
 *
 * @author r.ratsun <r.ratsun@zinitsolutions.com>
 */
abstract class AbstractImageService extends Base
{

    /**
     * Create entity
     *
     * @param array $data
     * @return BaseEntity
     * @throws Exceptions\Error
     */
    public function createEntity($data)
    {
        if ($data['type'] === 'File' && !$this->isValidImageName($data['imageName'])) {
            throw new Exceptions\Error('Wrong file type. '.implode(', ', $this->getAllowedImageTypes()).' allowed.');
        } elseif ($data['type'] === 'Link' && !$this->isValidImageLink($data['imageLink'])) {
            throw new Exceptions\Error('Wrong image link.');
        }

        return parent::createEntity($data);
    }

    /**
     * Is valid image name ?
     *
     * @param string $name
     * @return boolean
     */
    protected function isValidImageName($name)
    {
        // parse image name
        $type = strtoupper(end(explode('.', $name)));

        return in_array($type, $this->getAllowedImageTypes());
    }

    /**
     * Get allowed image file type
     *
     * @return array
     */
    protected function getAllowedImageTypes()
    {
        return ['GIF', 'JPEG', 'PNG', 'JPG'];
    }

    /**
     * Is valid image url?
     *
     * @param  string $link
     * @return bool
     */
    protected function isValidImageLink($link)
    {
        return (bool) exif_imagetype($link);
    }
}
