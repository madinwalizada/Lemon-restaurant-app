import React from "react";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

function Home() {
  return (
    <main>
      <section class="little-lemon__header">
        <div class="little-lemon__content-wrapper">
          <div class="little-lemon__content">
            <h2>Little Lemon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button class="primary-btn header-btn">Reserve a Table</button>
          </div>

          <div class="little-lemon__img">
            <img src="header.png" alt="A person having food at the placement" />
          </div>
        </div>
      </section>

      <div class="title__button--container">
        <h2>This week's specials!</h2>
        <button class="secondary-btn">Online Menu</button>
      </div>

      <div class="container">
        <div class="card__wrap--outer">
          <div class="card__wrap--inner">
            <div class="card">
              <img src="../images/greek-salad.png" />
              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Greak salad</small>
                </h2>
                <h2 class="push" href="#">
                  <small>$12.89</small>
                </h2>
              </div>
              <div class="card__item flexible">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </small>
              </div>

              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Order a delivery</small>
                </h2>
                <a class="push" href="#">
                  <small>Share</small>
                </a>
              </div>
            </div>
          </div>

          <div class="card__wrap--inner">
            <div class="card">
              <img src="../images/dessert.png" />
              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Greak salad</small>
                </h2>
                <h2 class="push" href="#">
                  <small>$12.89</small>
                </h2>
              </div>
              <div class="card__item  flexible">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </small>
              </div>
              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Order a delivery</small>
                </h2>
                <a class="push" href="#">
                  <small>Share</small>
                </a>
              </div>
            </div>
          </div>

          <div class="card__wrap--inner">
            <div class="card">
              <img src="../images/restauranfood 2.png" />
              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Greak salad</small>
                </h2>
                <h2 class="push" href="#">
                  <small>$12.89</small>
                </h2>
              </div>
              <div class="card__item flexible">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500ss
                </small>
              </div>
              <div class="card__footer">
                <h2 class="pull" href="#">
                  <small>Order a delivery</small>
                </h2>
                <a class="push" href="#">
                  <small>Share</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default Home;
