var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement } from 'lit';
export { html } from 'lit';
import StyleShelter from 'style-shelter';
const observedForElements = new Set();
const updateRTL = () => {
    const dir = document.documentElement.dir === 'rtl'
        ? document.documentElement.dir
        : 'ltr';
    observedForElements.forEach((el) => {
        el.setAttribute('dir', dir);
    });
};
const rtlObserver = new MutationObserver(updateRTL);
rtlObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['dir'],
});
const canManageContentDirection = (el) => typeof el.startManagingContentDirection !== 'undefined' ||
    el.tagName === 'SP-THEME';
export function SpectrumMixin(constructor) {
    class SlotTextObservingElement extends constructor {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.componentName = arguments && arguments[0];
            this.dir = 'ltr';

        }
        /**
         * @private
         */
        get isLTR() {
            return this.dir === 'ltr';
        }
        connectedCallback() {
            if (!this.hasAttribute('dir')) {
                let dirParent = (this.assignedSlot ||
                    this.parentNode);
                while (dirParent !== document.documentElement &&
                    !canManageContentDirection(dirParent)) {
                    dirParent = (dirParent.assignedSlot || // step into the shadow DOM of the parent of a slotted node
                        dirParent.parentNode || // DOM Element detected
                        dirParent
                            .host);
                }
                this.dir =
                    dirParent.dir === 'rtl' ? dirParent.dir : this.dir || 'ltr';
                if (dirParent === document.documentElement) {
                    observedForElements.add(this);
                }
                else {
                    const { localName } = dirParent;
                    if (localName.search('-') > -1 &&
                        !customElements.get(localName)) {
                        customElements.whenDefined(localName).then(() => {
                            dirParent.startManagingContentDirection(this);
                        });
                    }
                    else {
                        dirParent.startManagingContentDirection(this);
                    }
                }
                this._dirParent = dirParent;
            }
            super.connectedCallback();
            if (!this.componentName) {
                const styles = ['/assets/css/bootstrap.css'];
                StyleShelter.adopt(styles, this.shadowRoot, { append: [this.shadowRoot] });

            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this._dirParent) {
                if (this._dirParent === document.documentElement) {
                    observedForElements.delete(this);
                }
                else {
                    this._dirParent.stopManagingContentDirection(this);
                }
                this.removeAttribute('dir');
            }
        }
    }
    __decorate([
        __metadata("design:type", String)
    ], SlotTextObservingElement.prototype, "dir", void 0);
    return SlotTextObservingElement;
}
export class BootstrapElement extends SpectrumMixin(LitElement) {}