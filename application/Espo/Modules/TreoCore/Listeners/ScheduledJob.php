<?php
/**
 * This file is part of EspoCRM and/or TreoPIM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2018 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * TreoPIM is EspoCRM-based Open Source Product Information Management application.
 * Copyright (C) 2017-2018 Zinit Solutions GmbH
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

namespace Espo\Modules\TreoCore\Listeners;

/**
 * ScheduledJob listener
 *
 * @author r.ratsun@zinitsolutions.com
 */
class ScheduledJob extends Settings
{
    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionCreate(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionPatch(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionUpdate(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionMassUpdate(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionDelete(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function afterActionMassDelete(array $data): array
    {
        $this->checkingAllowUnstableParam();

        return $data;
    }

    /**
     * Checking allowUnstable param. Blocking or unblocking it
     */
    protected function checkingAllowUnstableParam(): void
    {
        if (!$this->isModuleAutoUpdateJob()) {
            $this->blockingAllowUnstableParam();
        } else {
            $this->unblockingAllowUnstableParam();
        }
    }

    /**
     * Blocking allowUnstable param
     */
    protected function blockingAllowUnstableParam(): void
    {
        // set stable minimum stability
        $this->setMinimumStability('stable');

        // blocking allowUnstable param
        $this->getConfig()->set('allowUnstableBlocked', true);
        $this->getConfig()->save();
    }

    /**
     * Unblocking allowUnstable param
     */
    protected function unblockingAllowUnstableParam(): void
    {
        // blocking allowUnstable param
        $this->getConfig()->set('allowUnstableBlocked', false);
        $this->getConfig()->save();
    }

    /**
     * Is ModuleAutoUpdate job isset in ids
     *
     * @return bool
     */
    protected function isModuleAutoUpdateJob(): bool
    {
        // prepare result
        $result = false;

        $count = $this
            ->getEntityManager()
            ->getRepository('ScheduledJob')
            ->where(['job' => 'ModuleAutoUpdate', 'status' => 'Active'])
            ->count();

        if ($count == 0) {
            // prepare result
            $result = true;
        }

        return $result;
    }
}
