import React, { useState, useEffect } from "react";

const ShoppingCart = ({
  contents,
  iconLocator,
  deleteItem,
  itemWasDeleted,
  isSticky,
}) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    organizeCartItems(contents);
    hideCartIfEmptiedOut(contents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents]);

  function stackItems(items) {
    let flags = {};
    return items.filter(function (item) {
      if (flags[item.itemId]) {
        return false;
      }
      flags[item.itemId] = true;
      return true;
    });
  }

  function calculatePrice(price, count) {
    return (Number(price.replace(/,/g, "")) * count).toFixed(2);
  }

  function organizeCartItems(items) {
    const stacked = stackItems(items);

    let stackedAndCounted = [];
    stacked.forEach((item) => {
      let itemCount = 0;
      items.forEach((product) => {
        if (item.itemId === product.itemId) {
          itemCount++;
        }
      });
      stackedAndCounted.push({
        itemId: item.itemId,
        name: item.name,
        price: calculatePrice(item.price, itemCount),
        frequency: itemCount,
      });
    });
    setCartItems(stackedAndCounted);
  }

  function hideCartIfEmptiedOut(items) {
    if (items.length === 0 && itemWasDeleted === true) {
      toggleVisibility();
    }
  }

  function toggleVisibility() {
    let dropdown = document.getElementById("shopping-cart");
    dropdown.classList.toggle("is-active");
  }

  function calculateSubtotal() {
    let runningTotal = 0;
    cartItems.forEach((item) => {
      runningTotal += Math.round(item.price * 100) / 100;
    });
    return runningTotal;
  }

  function addCommas(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div
      className={`dropdown shopping-cart is-right ${isSticky && "sticky-cart"}`}
      id="shopping-cart"
    >
      <div className="dropdown-trigger" onClick={toggleVisibility}>
        Cart({contents.length})
      </div>
      <div className="dropdown-menu">
        {cartItems.map((item, key) => {
          return (
            <div className="dropdown-item shopping-cart-item" key={key}>
              <article className="media">
                <figure className="media-left">
                  <p className="image is-48x48 shopping-cart-item-image">
                    {console.log(cartItems)}
                    <img src={iconLocator(item.itemId)} alt={item.name} />
                  </p>
                </figure>
                <div className="media-content shopping-cart-content">
                  <div className="item-info">
                    <span className="item-frequency">{item.frequency}</span>
                    <span className="item-name">{item.name}</span>
                    <span
                      className="item-delete"
                      onClick={deleteItem.bind(deleteItem, item.itemId)}
                    >
                      X
                    </span>
                    <span className="item-price">${addCommas(item.price)}</span>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
        <hr className="dropdown-divider" />
        <div className="dropdown-subtotal">
          <span className="dropdown-subtotal-text">Subtotal</span>
          <span className="dropdown-subtotal-amount">
            ${addCommas(calculateSubtotal())}
          </span>
        </div>
        <hr className="dropdown-divider" />
        <button className="dropdown-checkout">Check Out</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
