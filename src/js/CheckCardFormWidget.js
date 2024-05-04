import ValidateForm from "./ValidateForm";

export default class CheckCardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
        <ul class="cards">
            <li class="cards-item"><span class="card visa" title="Visa">Visa</span></li>
            <li class="cards-item"><span class="card mastercard" title="Mastercard">MasterCard</span></li>
            <li class="cards-item"><span class="card mir" title="Mir">Mir</span></li>
            <li class="cards-item"><span class="card american" title="American Express">American Express</span></li>
            <li class="cards-item"><span class="card discover" title="Discover">Discover</span></li>
            <li class="cards-item"><span class="card jcb" title="JCB">JCB</span></li>
            <li class="cards-item"><span class="card diners" title="Diners Club">Diners Club</span></li>
        </ul>
        <form id="form" novalidate="novalidate">
            <div class="form-group">
                <input class="form-group__input" id="card-number" name="card-number" type="text" placeholder="Credit card number">
                <div class="tooltip">Введите номер карты</div>
                <button class="form-group__button" type="submit" id="submitform">Проверить</button>
            </div>
        </form>
        <div class="result">
            <div class="result-validate luhn-succes">Карта действительна</div>
            <div class="result-validate luhn-error">Неверный номер карты</div>
            <div class="result-validate no-bank">Карта не определена</div>
        </div>            
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.form = new ValidateForm();
  }

  static get inputSelector() {
    return ".form-group__input";
  }

  static get submitSelector() {
    return ".form-group__button";
  }
}
