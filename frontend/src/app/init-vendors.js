//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2018 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2017 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

// 'Global' dependencies
//
// dependencies required by classic (Rails) and Angular application.

// Angular 4 deps. Must be loaded early!
// require('reflect-metadata');
// require('zone.js');
// require('@angular/core');

// ES6 Promise polyfill
require('expose-loader?Promise!es6-promise');

// jQuery
require('expose-loader?jQuery!jquery');
require('jquery-ujs');

require('expose-loader?mousetrap!mousetrap/mousetrap.min.js');

// Angular dependencies
require('expose-loader?angular!angular');
require('expose-loader?dragula!dragula/dist/dragula.min.js');
require('angular-animate/angular-animate.min.js');
require('angular-aria/angular-aria.min.js');
require('angular-dragula/dist/angular-dragula.min.js');
require('angular-elastic');
require('@uirouter/angular-hybrid');
require('ng-file-upload/dist/ng-file-upload.min.js');

// Jquery UI
require('jquery-ui/ui/core.js');
require('jquery-ui/ui/position.js');
require('jquery-ui/ui/widgets/datepicker.js');
require('jquery-ui/ui/widgets/dialog.js');
require('jquery-ui/ui/widgets/autocomplete.js');
require('jquery-ui/ui/widgets/sortable.js');
require('./misc/datepicker-defaults');

require('jquery-ui/ui/i18n/datepicker-en-GB.js');
require('jquery-ui/ui/i18n/datepicker-de.js');

require('jquery-ui/ui/widgets/dialog.js');

require('expose-loader?moment!moment');
require('moment/locale/en-gb.js');
require('moment/locale/de.js');

require('jquery.caret');
// Text highlight for autocompleter
require('mark.js/dist/jquery.mark.min.js');
// Micro Text fuzzy search library
require('fuse.js');

require('at.js/dist/js/jquery.atwho.js');


require('moment-timezone/builds/moment-timezone-with-data.min.js');

require('../../vendor/select2/select2.min.js');

require('ui-select/dist/select.min.js');

require('expose-loader?URI!URIjs');
require('URIjs/src/URITemplate');

require("expose-loader?I18n!../vendor/i18n");