const htmlTags = {
  /**
   *
   * @param {string} tagElement Create a element
   * @returns HTML element
   */
  tag: (tagElement) => document.createElement(tagElement),
  /**
   *
   * @param {string} id set id div element
   * @param {string} className set class div element
   * @param  {...any} childElement add elements into div element
   * @returns div element with elements added into it
   */
  divTag: function (id, className, ...childElement) {
    const div = this.tag("div");
    id == "" || id == null ? null : (div.id = id);
    className == "" || className == null ? null : (div.className = className);
    childElement == "" || childElement == null ? null : div.append(...childElement);
    return div;
  },
  /**
   *
   * @param {string} className set class ul element
   * @returns ul element
   */
  ulTag: function (className) {
    const ul = this.tag("ul");
    className == "" || className == null ? null : (ul.className = className);
    return ul;
  },
  liTag: function (...childElement) {
    const li = this.tag("li");
    childElement == "" || childElement == null ? null : li.append(...childElement);
    return li;
  },

  /**
   *
   * @param {string} src set source image
   * @returns img element
   */
  imgTag: function (src) {
    const img = this.tag("img");
    src == "" || src == null ? null : (img.src = src);
    return img;
  },
  /**
   *
   * @param {string} text content for span element
   * @returns span element
   */
  spanTag: function (text) {
    const span = this.tag("span");
    text == "" || text == null ? null : (span.innerText = text);
    return span;
  },
  /**
   *
   * @param {string} id set id property
   * @param {string} value set value button
   * @returns button element
   */
  buttonTag: function (id, value) {
    const button = this.tag("button");
    id == "" || id == null ? null : (button.id = id);
    value == "" || value == null ? null : (button.innerHTML = value);
    return button;
  },
  /**
   *
   * @param {string} type set type property
   * @param {string} id set id property
   * @returns input element
   */
  inputTag: function (type, id) {
    const input = this.tag("input");
    type == "" || type == null ? null : (input.type = type);
    id == "" || id == null ? null : (input.id = id);
    return input;
  },
  /**
   *
   * @param {number} headingNumber set number heading
   * @param {string} text content for heading element
   * @returns h element
   */
  hTag: function (headingNumber, text) {
    const heading = this.tag(`h${headingNumber}`);
    text == "" || text == null ? null : (heading.innerText = text);
    return heading;
  },
  /**
   * Create p element
   * @param {string} id set id property
   * @returns p element
   */
  pTag: function (id) {
    const p = this.tag("p");
    id == "" || id == null ? null : (p.id = id);
    return p;
  },
};
export default htmlTags;
