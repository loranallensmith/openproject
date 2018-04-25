// -- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
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
// See doc/COPYRIGHT.rdoc for more details.
// ++

import {OpModalComponent} from "core-components/op-modals/op-modal.component";
import {I18nToken, OpModalLocalsToken} from "core-app/angular4-transition-utils";
import {Component, ElementRef, Inject} from "@angular/core";
import {OpModalLocalsMap} from "core-components/op-modals/op-modal.types";

export interface ConfirmDialogOptions {
  text:{
    title:string;
    text:string;
    button_continue?:string;
    button_cancel?:string;
  };
  closeByEscape?:boolean;
  showClose?:boolean;
  closeByDocument?:boolean;
}

@Component({
  template: require('!!raw-loader!./confirm-dialog.modal.html')
})
export class ConfirmDialogModal extends OpModalComponent {

  public showClose:boolean;

  public confirmed = false;

  private options:ConfirmDialogOptions;

  public text = {
    title: this.I18n.t('js.modals.form_submit.title'),
    text: this.I18n.t('js.modals.form_submit.text'),
    button_continue: this.I18n.t('js.button_continue'),
    button_cancel: this.I18n.t('js.button_cancel'),
    close_popup: this.I18n.t('js.close_popup_title')
  };

  constructor(readonly elementRef:ElementRef,
              @Inject(OpModalLocalsToken) public locals:OpModalLocalsMap,
              @Inject(I18nToken) readonly I18n:op.I18n) {

    super(locals, elementRef);

    this.options = locals.options;
    this.closeOnEscape = _.defaultTo(this.options.closeByEscape, true);
    this.closeOnOutsideClick = _.defaultTo(this.options.closeByDocument, true);
    this.showClose = _.defaultTo(this.options.showClose, true);

    // override default texts if any
    this.text = _.defaults(this.options.text, this.text);
  }

  public confirmAndClose(evt:JQueryEventObject) {
    this.confirmed = true;
    this.closeMe(evt);
  }
}

