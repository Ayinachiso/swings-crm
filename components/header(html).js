// import * as script from "../js/scripts";
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="site-header" class="site-header header-static">
      <!-- Main Header start -->
      <div class="header-desktop">
          <div class="octf-main-header is-fixed">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-logo align-self-center">
                          <div id="site-logo" class="site-logo">
                              <a href="/index.html">
                                  <img src="/images/logo.svg" alt="SwingsCRM" class="">
                              </a>
                          </div>
                      </div>
                      <div class="col-menu text-center">
                          <nav id="site-navigation" class="main-navigation">
                              <ul class="menu">
                                  <li class="menu-item-has-children"><a class="feature-menu">Features</a>
                                      <ul class="sub-menu">
                                        <div class="sub-set">
                                        <li><a href="email-campaign.html">Email Campaign</a></li>
                                        <li><a href="customer-rating.html">Customer Rating</a></li>
                                        <li><a href="customer-analytic.html">Customer Analytic</a></li>
                                        <li><a href="subscription-scheduling.html">Subscription Scheduling</a></li>
                                        </div>
                                        <div class="sub-set">
                                        <li><a href="reports.html">Reports</a></li>
                                        <li><a href="leadmgt.html">Lead Management</a></li>
                                        <li><a href="birthday-scheduling.html">Birthday Scheduling</a></li>
                                        <li><a href="timeline.html">Timeline</a></li>
                                        </div>
                                        <div class="sub-set">
                                        <li><a href="SMS.html">SMS</a></li>
                                        <li><a href="in-app.html">In App Chat</a></li>
                                        <li><a href="task-scheduling.html">Task Scheduling</a></li>
                                        <li><a href="role-based.html">Role Based</a></li>
                                        </div>
                                        <div class="sub-set">
                                        <li><a href="customer-mgt.html">Customer Management</a></li>
                                        <li><a href="incident-mgt.html">Incident Management</a></li>
                                        </div>
                                        </ul>
                                        </li>
                                        
                                        <li><a href="pricing.html">Pricing</a></li>
                                        
                                        
                                        <li class="menu-item-linear"><a>Integrations</a>
                                        <ul class="sub-menu linear">
                                        <li><a href="#">3CX</a></li>
                                        <li><a href="#">Microsoft Dynamics 365</a></li>
                                        <li><a href="#">Whatsapp</a></li>
                                      </ul>
                                  </li>
                                  <!-- <li><a href="resource.html">Resources</a></li> -->
                              </ul>
                          </nav>
                      </div>
                      <div class="col-cta align-self-center">
                          <div class="octf-btn-cta justify-content-end">

                              <div class="octf-search octf-cta-header align-self-center">
                                  <div class="toggle_search octf-cta-icons">
                                      <i class="ot-flaticon-magnifiying-glass"></i>
                                  </div>
                                   <!-- Form Search on Header  -->
                                  <div class="h-search-form-field collapse">
                                      <div class="search-overlay"></div>
                                      <div class="h-search-form-inner">
                                          <i class="ot-flaticon-close"></i>
                                          <div class="container">
                                              <form role="search" method="get" id="hsearch-form" class="search-form">
                                                  <span class="pre-text">What are you looking for?</span>
                                                  <input type="search" class="search-field" placeholder="Enter Keyword…" value="" name="s">
                                                  <button type="submit" class="search-submit"><i class="ot-flaticon-magnifiying-glass"></i></button>
                                              </form>
                                          </div>
                                      </div>                                  
                                  </div>
                              </div>



                              <div class="octf-header-btn octf-cta-header">
                                  <div class="btn-cta-group btn-cta-header">
                                      <a class="octf-btn octf-btn-second trial-btn" href="https://swingscrm.com.ng/register">Start Free Trial</a>
                                  </div>
                              </div>
                              
                          </div>   
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div class="header_mobile">
          <div class="container-fluid">
              <div class="octf-mainbar-row octf-row">
                  <div class="octf-col">
                      <div class="mlogo_wrapper clearfix">
                          <div class="mobile_logo">
                              <a href="/index.html">
                                  <img src="/images/logo.svg" alt="SwingsCrm">
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="octf-col justify-content-end">
                      <div class="octf-search octf-cta-header align-self-center">
                          <div class="toggle_search octf-cta-icons">
                              <i class="ot-flaticon-magnifiying-glass"></i>
                          </div>
                           <!-- Form Search on Header  -->
                          <div class="h-search-form-field collapse">
                              <div class="search-overlay"></div>
                              <div class="h-search-form-inner">
                                  <i class="ot-flaticon-close"></i>
                                  <div class="container">
                                      <form role="search" method="get" id="hsearch-form" class="search-form">
                                          <span class="pre-text">What are you looking for?</span>
                                          <input type="search" class="search-field" placeholder="Enter Keyword…" value="" name="s">
                                          <button type="submit" class="search-submit"><i class="ot-flaticon-magnifiying-glass"></i></button>
                                      </form>
                                  </div>
                              </div>                                  
                          </div>
                      </div>
                      <div id="mmenu-toggle" class="mmenu-toggle align-self-center">
                          <button><i class="ot-flaticon-menu-of-three-lines"></i></button>
                      </div>
                      <div class="site-overlay mmenu-overlay"></div>
                  </div>
                  <div id="mmenu-wrapper" class="mmenu-wrapper on-right">
                      <div class="mmenu-inner">
                          <a class="mmenu-close" href="#"><i class="ot-flaticon-right-arrow"></i></a>
                          <div class="mobile-nav">
                              <ul id="menu-main-menu" class="mobile_mainmenu none-style">
                                  <li class="menu-item-has-children row m-0 align-items-center justify-content-between"><span class="arrow is-parent">Features</span>
                                    <ul class="sub-menu">
                                    <li class="col"><a href="email-campaign.html">Email Campaign</a></li>
                                    <li class="col"><a href="customer-rating.html">Customer Rating</a></li>
                                    <li class="col"><a href="customer-analytic.html">Customer Analytic</a></li>
                                      <li class="col"><a href="reports.html">Reports</a></li>
                                      <li class="col"><a href="leadmgt.html">Lead Management</a></li>
                                      <li class="col"><a href="birthday-scheduling.html">Birthday Scheduling</a></li>
                                      <li class="col"><a href="subscription-scheduling.html">Subscription Scheduling</a></li>
                                      <li class="col"><a href="SMS.html">SMS</a></li>
                                      <li class="col"><a href="in-app.html">In App Chat</a></li>
                                      <li class="col"><a href="timeline.html">Timeline</a></li>
                                      <li class="col"><a href="task-scheduling.html">Task Scheduling</a></li>
                                      <li class="col"><a href="role-based.html">Role Based</a></li>
                                      <li class="col"><a href="customer-mgt.html">Customer Management</a></li>
                                      <li class="col"><a href="incident-mgt.html">Incident Management</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li class="menu-item-has-children row m-0 align-items-center justify-content-between"><span class="arrow is-parent">Integrations</span>
                                    <ul class="sub-menu">
                                    <li class="col"><a href="#">3CX</a></li>
                                    <li class="col"><a href="#">Microsoft Dynamics 365</a></li>
                                    <li class="col"><a href="#">Whatsapp</a></li>
                                    </ul>
                                  </li>
                                  <!-- <li><a href="resource.html">Resources</a></li> -->
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
  
          `;
    /* --------------------------------------------------
     * sticky header
     * --------------------------------------------------*/
    $(".header-static .is-fixed")
      .parent()
      .append('<div class="header-clone"></div>');
    $(".header-clone").height($("#site-header .is-fixed").outerHeight());
    $(".header-static .header-clone").hide();
    $(window).on("scroll", function () {
      var site_header = $("#site-header").outerHeight() + 1;

      if ($(window).scrollTop() >= site_header) {
        $(".site-header .is-fixed").addClass("is-stuck");
        $(".header-static .header-clone").show();
      } else {
        $(".site-header .is-fixed").removeClass("is-stuck");
        $(".header-static .header-clone").hide();
      }
    });
    /* --------------------------------------------------
     * mobile menu
     * --------------------------------------------------*/

    $("#mmenu_toggle").on("click", function () {
      $(this).toggleClass("active");
      $(this).parents(".header_mobile").toggleClass("open");
      if ($(this).hasClass("active")) {
        $(".mobile_nav").stop(true, true).slideDown(100);
      } else {
        $(".mobile_nav").stop(true, true).slideUp(100);
      }
    });

    $(".menu-hamburger-toggle").each(function () {
      var selector = $(this),
        menuHamburger = selector.next(".octf-menu-hamburger"),
        mainNav = menuHamburger.find(".main-navigation"),
        btnClose = menuHamburger.find("#menu-hamburger-close");
      selector.on("click", function () {
        menuHamburger.addClass("open-menu");
      });
      btnClose.on("click", function () {
        menuHamburger.removeClass("open-menu");
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          menuHamburger.removeClass("open-menu");
        }
      });
    });

    var navInneer = $(".one-nav");
    if (navInneer.length > 0) {
      navInneer.singlePageNav({
        updateHash: false,
        filter: 'a[href^="#"]',
        offset: 0,
        speed: 600,
        currentClass: "current",
        easing: "swing",
      });
    }

    $(".octf-search").each(function () {
      var btn = $(this).find(".toggle_search"),
        form = $(this).find(".h-search-form-field");
      function search_handler() {
        var isActive = !btn.hasClass("active");

        btn.toggleClass("active", isActive);
        form.toggleClass("show", isActive);
        return false;
      }
      $(".search-overlay, .h-search-form-inner > i, .toggle_search").on(
        "click",
        search_handler
      );
    });

    var element = $("#panel-btn"),
      sidebar = $("#side-panel");

    function panel_handler() {
      var isActive = !element.hasClass("active");

      element.toggleClass("active", isActive);
      sidebar.toggleClass("side-panel-open", isActive);
      $("body").toggleClass("side-panel-active", isActive);
      return false;
    }

    $("#panel-btn, .side-panel-close, .panel-overlay").on(
      "click",
      panel_handler
    );

    var element = $("#mmenu-toggle"),
      mmenu = $("#mmenu-wrapper");

    function mmenu_handler() {
      var isActive = !element.hasClass("active");

      element.toggleClass("active", isActive);
      mmenu.toggleClass("mmenu-open", isActive);
      $("body").toggleClass("mmenu-active", isActive);
      return false;
    }

    $("#mmenu-toggle, .mmenu-close, .mmenu-overlay").on("click", mmenu_handler);

    $(".mmenu-wrapper li:has(ul)").each(function () {
      $(this)
        .children()
        .eq(0)
        .after('<span class="arrow"><i class="fas fa-caret-down"></i><span>');
    });
    $(".mmenu-wrapper .mobile_mainmenu > li span.arrow").on(
      "click",
      function () {
        $(this).parent().find("> ul").stop(true, true).slideToggle();
        $(this).toggleClass("active");
      }
    );
  }
}

customElements.define("html-header", Header);
