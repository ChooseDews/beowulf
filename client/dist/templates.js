angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/comments',
    "   <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"col s12\">\n" +
    "      <div class=\"card\">\n" +
    "        <div class=\"card-content comments\">\n" +
    "          <span class=\"card-title\">Comments</span>\n" +
    "\n" +
    "\n" +
    "\n" +
    "          <table>\n" +
    "           \n" +
    "\n" +
    "            <tbody>\n" +
    "              <tr>\n" +
    "                <td> <b>John</b> FTGLK9</td>\n" +
    "                <td width=\"50px\">1/12/2016</td>\n" +
    "\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                 <td><b>Justin</b> 94055102008641754804964</td>\n" +
    "                <td>10/10/2016</td>\n" +
    "\n" +
    "           \n" +
    "              </tr>\n" +
    "              \n" +
    "               <tr>\n" +
    "                 <td><b>Justin</b> 94055102008641754804964</td>\n" +
    "                <td>10/10/2016</td>\n" +
    "\n" +
    "           \n" +
    "              </tr>\n" +
    "              \n" +
    "               <tr>\n" +
    "                 <td><b>Justin</b>  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>\n" +
    "                <td>10/10/2016</td>\n" +
    "\n" +
    "           \n" +
    "              </tr>\n" +
    "\n" +
    "            </tbody>\n" +
    "\n" +
    "          </table>\n" +
    "          \n" +
    "    \n" +
    "          <br>\n" +
    "          \n" +
    "            <input-field>\n" +
    "    <textarea ng-model=\"dummyInputs.textAreaInput\" class=\"materialize-textarea\"></textarea>\n" +
    "    <label>New Comment</label>\n" +
    "</input-field>\n" +
    "          \n" +
    "          \n" +
    "      \n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>"
  );


  $templateCache.put('home/home',
    "<div ng-controller=\"homeController\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"home\">\n" +
    "  <entry>\n" +
    "    \n" +
    "  <a class=\"btn btn-flat white btn-large timeline\">See The Timeline</a>\n" +
    "\n" +
    "    \n" +
    "    \n" +
    "  </entry>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "  \n" +
    "<panel class=\"col rod s12 sea-blue\">\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"character in characters | limitTo:4\" class=\"col l3 m6\">\n" +
    "\n" +
    "\n" +
    "<user-card>\n" +
    "\n" +
    "<img src=\"{{character.picture}}\" alt=\"\">\n" +
    "\n" +
    "<name ng-class=\"{'evil': character.evil}\">{{character.name}}</name>\n" +
    "\n" +
    "</user-card>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<Br><Br><br>\n" +
    "\n" +
    "\n" +
    "  <a class=\"btn btn-flat white btn-large\">See All Characters</a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</panel>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div></div>\n" +
    "\n"
  );


  $templateCache.put('navigation/menu',
    "      <li class=\"first\">Characters</li>\n" +
    "\n" +
    "      <li>Timeline</li>\n" +
    "\n" +
    "      <li>Full Text</li>\n" +
    "\n" +
    "\n" +
    "      <li class=\"right\">Credits</li>"
  );


  $templateCache.put('navigation/nav',
    "<ul id=\"nav-mobile\" class=\"side-nav\" ng-click=\"closeSide()\">\n" +
    "  <div class=\"navigation-side navigation\">\n" +
    "\n" +
    "    <div class=\"logo\">\n" +
    "\n" +
    "\n" +
    "      <img src=\"/images/logo_saxon.png\" alt=\"\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-include=\"'navigation/menu'\"></div>\n" +
    "    \n" +
    "    \n" +
    "\n" +
    "  </div>\n" +
    "</ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"row main-row\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div id=\"content\" class=\"content navigation\">\n" +
    "\n" +
    "    <div class=\"navigation-bar\" ng-click=\"openSide()\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"logo\">\n" +
    "\n" +
    "\n" +
    "        <img src=\"/images/logo_saxon.png\" alt=\"\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <a class=\"hide-on-med-and-up mobile-menu\" ng-click=\"openSide()\">\n" +
    "\n" +
    "        <i class=\"material-icons menu\">menu</i>\n" +
    "\n" +
    "\n" +
    "      </a>\n" +
    "\n" +
    "\n" +
    "      <a class=\"button-collapse hide-on-med-and-up hide\" data-activates=\"nav-mobile\" data-sidenav=\"left\" data-menuwidth=\"320\" data-closeonclick=\"false\"><i class=\"material-icons menu\">menu</i></a>\n" +
    "\n" +
    "\n" +
    "      <div class=\"hide-on-small-only\">\n" +
    "        <div ng-include=\"'navigation/menu'\"></div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"hide-on-med-and-up nav-height\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"content-view\">\n" +
    "      <div ui-view></div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>"
  );

}]);
