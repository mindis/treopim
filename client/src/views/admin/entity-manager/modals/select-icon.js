/*
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

Espo.define('views/admin/entity-manager/modals/select-icon', ['views/modal', 'model'], function (Dep, Model) {

    return Dep.extend({

        template: 'admin/entity-manager/modals/select-icon',

        buttonList: [
            {
                name: 'cancel',
                label: 'Cancel'
            }
        ],

        data: function () {
            return {
                iconDataList: this.getIconDataList()
            };
        },

        setup: function () {
            this.iconList = ["fas fa-address-book","fas fa-address-card","fas fa-adjust","fas fa-align-center","fas fa-align-justify","fas fa-align-left","fas fa-align-right","fas fa-allergies","fas fa-ambulance","fas fa-american-sign-language-interpreting","fas fa-anchor","fas fa-angle-double-down","fas fa-angle-double-left","fas fa-angle-double-right","fas fa-angle-double-up","fas fa-angle-down","fas fa-angle-left","fas fa-angle-right","fas fa-angle-up","fas fa-archive","fas fa-arrow-alt-circle-down","fas fa-arrow-alt-circle-left","fas fa-arrow-alt-circle-right","fas fa-arrow-alt-circle-up","fas fa-arrow-circle-down","fas fa-arrow-circle-left","fas fa-arrow-circle-right","fas fa-arrow-circle-up","fas fa-arrow-down","fas fa-arrow-left","fas fa-arrow-right","fas fa-arrow-up","fas fa-arrows-alt","fas fa-arrows-alt-h","fas fa-arrows-alt-v","fas fa-assistive-listening-systems","fas fa-asterisk","fas fa-at","fas fa-audio-description","fas fa-backward","fas fa-balance-scale","fas fa-ban","fas fa-band-aid","fas fa-barcode","fas fa-bars","fas fa-baseball-ball","fas fa-basketball-ball","fas fa-bath","fas fa-battery-empty","fas fa-battery-full","fas fa-battery-half","fas fa-battery-quarter","fas fa-battery-three-quarters","fas fa-bed","fas fa-beer","fas fa-bell","fas fa-bell-slash","fas fa-bicycle","fas fa-binoculars","fas fa-birthday-cake","fas fa-blind","fas fa-bold","fas fa-bolt","fas fa-bomb","fas fa-book","fas fa-bookmark","fas fa-bowling-ball","fas fa-box","fas fa-box-open","fas fa-boxes","fas fa-braille","fas fa-briefcase","fas fa-briefcase-medical","fas fa-bug","fas fa-building","fas fa-bullhorn","fas fa-bullseye","fas fa-burn","fas fa-bus","fas fa-calculator","fas fa-calendar","fas fa-calendar-alt","fas fa-calendar-check","fas fa-calendar-minus","fas fa-calendar-plus","fas fa-calendar-times","fas fa-camera","fas fa-camera-retro","fas fa-capsules","fas fa-car","fas fa-caret-down","fas fa-caret-left","fas fa-caret-right","fas fa-caret-square-down","fas fa-caret-square-left","fas fa-caret-square-right","fas fa-caret-square-up","fas fa-caret-up","fas fa-cart-arrow-down","fas fa-cart-plus","fas fa-certificate","fas fa-chart-area","fas fa-chart-bar","fas fa-chart-line","fas fa-chart-pie","fas fa-check","fas fa-check-circle","fas fa-check-square","fas fa-chess","fas fa-chess-bishop","fas fa-chess-board","fas fa-chess-king","fas fa-chess-knight","fas fa-chess-pawn","fas fa-chess-queen","fas fa-chess-rook","fas fa-chevron-circle-down","fas fa-chevron-circle-left","fas fa-chevron-circle-right","fas fa-chevron-circle-up","fas fa-chevron-down","fas fa-chevron-left","fas fa-chevron-right","fas fa-chevron-up","fas fa-child","fas fa-circle","fas fa-circle-notch","fas fa-clipboard","fas fa-clipboard-check","fas fa-clipboard-list","fas fa-clock","fas fa-clone","fas fa-closed-captioning","fas fa-cloud","fas fa-cloud-download-alt","fas fa-cloud-upload-alt","fas fa-code","fas fa-code-branch","fas fa-coffee","fas fa-cog","fas fa-cogs","fas fa-columns","fas fa-comment","fas fa-comment-alt","fas fa-comment-dots","fas fa-comment-slash","fas fa-comments","fas fa-compass","fas fa-compress","fas fa-copy","fas fa-copyright","fas fa-couch","fas fa-credit-card","fas fa-crop","fas fa-crosshairs","fas fa-cube","fas fa-cubes","fas fa-cut","fas fa-database","fas fa-deaf","fas fa-desktop","fas fa-diagnoses","fas fa-dna","fas fa-dollar-sign","fas fa-dolly","fas fa-dolly-flatbed","fas fa-donate","fas fa-dot-circle","fas fa-dove","fas fa-download","fas fa-edit","fas fa-eject","fas fa-ellipsis-h","fas fa-ellipsis-v","fas fa-envelope","fas fa-envelope-open","fas fa-envelope-square","fas fa-eraser","fas fa-euro-sign","fas fa-exchange-alt","fas fa-exclamation","fas fa-exclamation-circle","fas fa-exclamation-triangle","fas fa-expand","fas fa-expand-arrows-alt","fas fa-external-link-alt","fas fa-external-link-square-alt","fas fa-eye","fas fa-eye-dropper","fas fa-eye-slash","fas fa-fast-backward","fas fa-fast-forward","fas fa-fax","fas fa-female","fas fa-fighter-jet","fas fa-file","fas fa-file-alt","fas fa-file-archive","fas fa-file-audio","fas fa-file-code","fas fa-file-excel","fas fa-file-image","fas fa-file-medical","fas fa-file-medical-alt","fas fa-file-pdf","fas fa-file-powerpoint","fas fa-file-video","fas fa-file-word","fas fa-film","fas fa-filter","fas fa-fire","fas fa-fire-extinguisher","fas fa-first-aid","fas fa-flag","fas fa-flag-checkered","fas fa-flask","fas fa-folder","fas fa-folder-open","fas fa-font","fas fa-font-awesome-logo-full","fas fa-football-ball","fas fa-forward","fas fa-frown","fas fa-futbol","fas fa-gamepad","fas fa-gavel","fas fa-gem","fas fa-genderless","fas fa-gift","fas fa-glass-martini","fas fa-globe","fas fa-golf-ball","fas fa-graduation-cap","fas fa-h-square","fas fa-hand-holding","fas fa-hand-holding-heart","fas fa-hand-holding-usd","fas fa-hand-lizard","fas fa-hand-paper","fas fa-hand-peace","fas fa-hand-point-down","fas fa-hand-point-left","fas fa-hand-point-right","fas fa-hand-point-up","fas fa-hand-pointer","fas fa-hand-rock","fas fa-hand-scissors","fas fa-hand-spock","fas fa-hands","fas fa-hands-helping","fas fa-handshake","fas fa-hashtag","fas fa-hdd","fas fa-heading","fas fa-headphones","fas fa-heart","fas fa-heartbeat","fas fa-history","fas fa-hockey-puck","fas fa-home","fas fa-hospital","fas fa-hospital-alt","fas fa-hospital-symbol","fas fa-hourglass","fas fa-hourglass-end","fas fa-hourglass-half","fas fa-hourglass-start","fas fa-i-cursor","fas fa-id-badge","fas fa-id-card","fas fa-id-card-alt","fas fa-image","fas fa-images","fas fa-inbox","fas fa-indent","fas fa-industry","fas fa-info","fas fa-info-circle","fas fa-italic","fas fa-key","fas fa-keyboard","fas fa-language","fas fa-laptop","fas fa-leaf","fas fa-lemon","fas fa-level-down-alt","fas fa-level-up-alt","fas fa-life-ring","fas fa-lightbulb","fas fa-link","fas fa-lira-sign","fas fa-list","fas fa-list-alt","fas fa-list-ol","fas fa-list-ul","fas fa-location-arrow","fas fa-lock","fas fa-lock-open","fas fa-long-arrow-alt-down","fas fa-long-arrow-alt-left","fas fa-long-arrow-alt-right","fas fa-long-arrow-alt-up","fas fa-low-vision","fas fa-magic","fas fa-magnet","fas fa-male","fas fa-map","fas fa-map-marker","fas fa-map-marker-alt","fas fa-map-pin","fas fa-map-signs","fas fa-mars","fas fa-mars-double","fas fa-mars-stroke","fas fa-mars-stroke-h","fas fa-mars-stroke-v","fas fa-medkit","fas fa-meh","fas fa-mercury","fas fa-microchip","fas fa-microphone","fas fa-microphone-slash","fas fa-minus","fas fa-minus-circle","fas fa-minus-square","fas fa-mobile","fas fa-mobile-alt","fas fa-money-bill-alt","fas fa-moon","fas fa-motorcycle","fas fa-mouse-pointer","fas fa-music","fas fa-neuter","fas fa-newspaper","fas fa-notes-medical","fas fa-object-group","fas fa-object-ungroup","fas fa-outdent","fas fa-paint-brush","fas fa-pallet","fas fa-paper-plane","fas fa-paperclip","fas fa-parachute-box","fas fa-paragraph","fas fa-paste","fas fa-pause","fas fa-pause-circle","fas fa-paw","fas fa-pen-square","fas fa-pencil-alt","fas fa-people-carry","fas fa-percent","fas fa-phone","fas fa-phone-slash","fas fa-phone-square","fas fa-phone-volume","fas fa-piggy-bank","fas fa-pills","fas fa-plane","fas fa-play","fas fa-play-circle","fas fa-plug","fas fa-plus","fas fa-plus-circle","fas fa-plus-square","fas fa-podcast","fas fa-poo","fas fa-portrait","fas fa-pound-sign","fas fa-power-off","fas fa-prescription-bottle","fas fa-prescription-bottle-alt","fas fa-print","fas fa-procedures","fas fa-puzzle-piece","fas fa-qrcode","fas fa-question","fas fa-question-circle","fas fa-quidditch","fas fa-quote-left","fas fa-quote-right","fas fa-random","fas fa-recycle","fas fa-redo","fas fa-redo-alt","fas fa-registered","fas fa-reply","fas fa-reply-all","fas fa-retweet","fas fa-ribbon","fas fa-road","fas fa-rocket","fas fa-rss","fas fa-rss-square","fas fa-ruble-sign","fas fa-rupee-sign","fas fa-save","fas fa-search","fas fa-search-minus","fas fa-search-plus","fas fa-seedling","fas fa-server","fas fa-share","fas fa-share-alt","fas fa-share-alt-square","fas fa-share-square","fas fa-shekel-sign","fas fa-shield-alt","fas fa-ship","fas fa-shipping-fast","fas fa-shopping-bag","fas fa-shopping-basket","fas fa-shopping-cart","fas fa-shower","fas fa-sign","fas fa-sign-in-alt","fas fa-sign-language","fas fa-sign-out-alt","fas fa-signal","fas fa-sitemap","fas fa-sliders-h","fas fa-smile","fas fa-smoking","fas fa-snowflake","fas fa-sort","fas fa-sort-alpha-down","fas fa-sort-alpha-up","fas fa-sort-amount-down","fas fa-sort-amount-up","fas fa-sort-down","fas fa-sort-numeric-down","fas fa-sort-numeric-up","fas fa-sort-up","fas fa-space-shuttle","fas fa-spinner","fas fa-square","fas fa-square-full","fas fa-star","fas fa-star-half","fas fa-step-backward","fas fa-step-forward","fas fa-stethoscope","fas fa-sticky-note","fas fa-stop","fas fa-stop-circle","fas fa-stopwatch","fas fa-street-view","fas fa-strikethrough","fas fa-subscript","fas fa-subway","fas fa-suitcase","fas fa-sun","fas fa-superscript","fas fa-sync","fas fa-sync-alt","fas fa-syringe","fas fa-table","fas fa-table-tennis","fas fa-tablet","fas fa-tablet-alt","fas fa-tablets","fas fa-tachometer-alt","fas fa-tag","fas fa-tags","fas fa-tape","fas fa-tasks","fas fa-taxi","fas fa-terminal","fas fa-text-height","fas fa-text-width","fas fa-th","fas fa-th-large","fas fa-th-list","fas fa-thermometer","fas fa-thermometer-empty","fas fa-thermometer-full","fas fa-thermometer-half","fas fa-thermometer-quarter","fas fa-thermometer-three-quarters","fas fa-thumbs-down","fas fa-thumbs-up","fas fa-thumbtack","fas fa-ticket-alt","fas fa-times","fas fa-times-circle","fas fa-tint","fas fa-toggle-off","fas fa-toggle-on","fas fa-trademark","fas fa-train","fas fa-transgender","fas fa-transgender-alt","fas fa-trash","fas fa-trash-alt","fas fa-tree","fas fa-trophy","fas fa-truck","fas fa-truck-loading","fas fa-truck-moving","fas fa-tty","fas fa-tv","fas fa-umbrella","fas fa-underline","fas fa-undo","fas fa-undo-alt","fas fa-universal-access","fas fa-university","fas fa-unlink","fas fa-unlock","fas fa-unlock-alt","fas fa-upload","fas fa-user","fas fa-user-alt","fas fa-user-alt-slash","fas fa-user-astronaut","fas fa-user-check","fas fa-user-circle","fas fa-user-clock","fas fa-user-cog","fas fa-user-edit","fas fa-user-friends","fas fa-user-graduate","fas fa-user-lock","fas fa-user-md","fas fa-user-minus","fas fa-user-ninja","fas fa-user-plus","fas fa-user-secret","fas fa-user-shield","fas fa-user-slash","fas fa-user-tag","fas fa-user-tie","fas fa-user-times","fas fa-users","fas fa-users-cog","fas fa-utensil-spoon","fas fa-utensils","fas fa-venus","fas fa-venus-double","fas fa-venus-mars","fas fa-vial","fas fa-vials","fas fa-video","fas fa-video-slash","fas fa-volleyball-ball","fas fa-volume-down","fas fa-volume-off","fas fa-volume-up","fas fa-warehouse","fas fa-weight","fas fa-wheelchair","fas fa-wifi","fas fa-window-close","fas fa-window-maximize","fas fa-window-minimize","fas fa-window-restore","fas fa-wine-glass","fas fa-won-sign","fas fa-wrench","fas fa-x-ray","fas fa-yen-sign","far fa-address-book","far fa-address-card","far fa-arrow-alt-circle-down","far fa-arrow-alt-circle-left","far fa-arrow-alt-circle-right","far fa-arrow-alt-circle-up","far fa-bell","far fa-bell-slash","far fa-bookmark","far fa-building","far fa-calendar","far fa-calendar-alt","far fa-calendar-check","far fa-calendar-minus","far fa-calendar-plus","far fa-calendar-times","far fa-caret-square-down","far fa-caret-square-left","far fa-caret-square-right","far fa-caret-square-up","far fa-chart-bar","far fa-check-circle","far fa-check-square","far fa-circle","far fa-clipboard","far fa-clock","far fa-clone","far fa-closed-captioning","far fa-comment","far fa-comment-alt","far fa-comment-dots","far fa-comments","far fa-compass","far fa-copy","far fa-copyright","far fa-credit-card","far fa-dot-circle","far fa-edit","far fa-envelope","far fa-envelope-open","far fa-eye","far fa-eye-slash","far fa-file","far fa-file-alt","far fa-file-archive","far fa-file-audio","far fa-file-code","far fa-file-excel","far fa-file-image","far fa-file-pdf","far fa-file-powerpoint","far fa-file-video","far fa-file-word","far fa-flag","far fa-folder","far fa-folder-open","far fa-font-awesome-logo-full","far fa-frown","far fa-futbol","far fa-gem","far fa-hand-lizard","far fa-hand-paper","far fa-hand-peace","far fa-hand-point-down","far fa-hand-point-left","far fa-hand-point-right","far fa-hand-point-up","far fa-hand-pointer","far fa-hand-rock","far fa-hand-scissors","far fa-hand-spock","far fa-handshake","far fa-hdd","far fa-heart","far fa-hospital","far fa-hourglass","far fa-id-badge","far fa-id-card","far fa-image","far fa-images","far fa-keyboard","far fa-lemon","far fa-life-ring","far fa-lightbulb","far fa-list-alt","far fa-map","far fa-meh","far fa-minus-square","far fa-money-bill-alt","far fa-moon","far fa-newspaper","far fa-object-group","far fa-object-ungroup","far fa-paper-plane","far fa-pause-circle","far fa-play-circle","far fa-plus-square","far fa-question-circle","far fa-registered","far fa-save","far fa-share-square","far fa-smile","far fa-snowflake","far fa-square","far fa-star","far fa-star-half","far fa-sticky-note","far fa-stop-circle","far fa-sun","far fa-thumbs-down","far fa-thumbs-up","far fa-times-circle","far fa-trash-alt","far fa-user","far fa-user-circle","far fa-window-close","far fa-window-maximize","far fa-window-minimize","far fa-window-restore"];
        },

        actionSelect: function (data) {
            this.trigger('select', data.value);
        },

        getIconDataList: function () {
            var rowList = [];

            this.iconList.forEach(function (item, i) {
                if (i % 12 === 0) {
                    rowList.push([]);
                }
                rowList[rowList.length - 1].push(item);
            }, this);

            return rowList;
        }

    });
});
