angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('chars/list',
    "<div ng-controller=\"charsListController\" class=\"characters sea-blue\">\n" +
    "\n" +
    "\n" +
    "  \n" +
    "  <h1 class=\"white-text center\" style=\"margin: 0px; padding: 40px; padding-bottom: 0px;\">Beowulf Characters</h1>\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"row\">\n" +
    "  \n" +
    "  <div class=\"col m4 offset-m4\">\n" +
    "    \n" +
    "    \n" +
    "    <div input-field>\n" +
    "    <input type=\"text\" class=\"white-text\" ng-model=\"search.name\">\n" +
    "    <label>Search Characters</label>\n" +
    "</div>\n" +
    "    \n" +
    "    </div>\n" +
    "  \n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"character in characters | filter:search:strict\" class=\"col l3 m6\">\n" +
    "\n" +
    "\n" +
    "<user-card ui-sref=\"character({id: character.id})\">\n" +
    "\n" +
    "<img ng-src=\"{{character.picture}}\" alt=\"\">\n" +
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
    "  \n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('chars/single',
    "<div ng-controller=\"charsSingleController\" class=\"characters sea-blue\">\n" +
    "\n" +
    "\n" +
    "  <br><br>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col m4\">\n" +
    "\n" +
    "\n" +
    "      <user-card>\n" +
    "\n" +
    "        <img ng-src=\"{{character.picture}}\" alt=\"\">\n" +
    "\n" +
    "        <name ng-class=\"{'evil': character.evil}\">{{character.name}}</name>\n" +
    "\n" +
    "      </user-card>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col m8\">\n" +
    "      <br>\n" +
    "\n" +
    "      <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "          <span class=\"card-title\">About {{character.name}}</span>\n" +
    "\n" +
    "          <p> {{character.disc}}\n" +
    "          </p>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>"
  );


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


  $templateCache.put('edit/character',
    "<div class=\"container\" ng-controller=\"editCharController\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <br><br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div class=\"card white\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "      <input-field>\n" +
    "        <input type=\"text\" ng-model=\"character.name\">\n" +
    "        <label>Name</label>\n" +
    "      </input-field>\n" +
    "      \n" +
    "      \n" +
    "      <input-field>\n" +
    "        <input type=\"text\" ng-model=\"character.picture\">\n" +
    "        <label>Picture</label>\n" +
    "      </input-field>\n" +
    "      \n" +
    "      \n" +
    "      \n" +
    "      <input-field>\n" +
    "          <textarea ng-model=\"character.disc\" class=\"materialize-textarea\"></textarea>\n" +
    "        <label>Description</label>\n" +
    "      </input-field>\n" +
    "      \n" +
    "        <p>\n" +
    "      <input type=\"checkbox\" ng-model=\"character.evil\" id=\"test5\" />\n" +
    "      <label for=\"test5\">Is Evil</label>\n" +
    "    </p>\n" +
    "      \n" +
    "       <br><br>\n" +
    "      \n" +
    "      \n" +
    "      <a class=\"waves-effect waves-light btn red\" ng-click=\"update(character)\">Update</a>\n" +
    "      \n" +
    "      <br><br><br><hr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <span class=\"grey-text\">{{character}}</span>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('edit/edit',
    "<div class=\"container\" ng-controller=\"editListController\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <br><br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div class=\"card white\" style=\"padding: 10px;\">\n" +
    "\n" +
    "\n" +
    "    <table>\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>Name</th>\n" +
    "          <th>Id</th>\n" +
    "          <th>Photo</th>\n" +
    "          <th>Delete</th>\n" +
    "\n" +
    "\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"c in cs\">\n" +
    "          <td ui-sref=\"edit_char({character: c.id})\">{{c.name}}</td>\n" +
    "          <td ui-sref=\"edit_char({character: c.id})\">{{c.id}}</td>\n" +
    "          <td ui-sref=\"edit_char({character: c.id})\">{{c.picture}}</td>\n" +
    "          <td ng-click=\"delete(c.id)\">Remove</td>\n" +
    "\n" +
    "\n" +
    "        </tr>\n" +
    "\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "    \n" +
    "    \n" +
    "    <br><br><hr><br>\n" +
    "    \n" +
    "          <a class=\"waves-effect waves-light btn red\" ng-click=\"createNew()\">Create</a>\n" +
    "    \n" +
    "    \n" +
    "    <br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "   <br><br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>"
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
    "  <a class=\"btn btn-flat white btn-large\" ui-sref=\"characters\">See All Characters</a>\n" +
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
    "      <li class=\"first\" ui-sref=\"characters\">Characters</li>\n" +
    "\n" +
    "      <li>Timeline</li>\n" +
    "\n" +
    "      <li><a style=\"color: white !important;\" href=\"https://www.gutenberg.org/files/16328/16328-h/16328-h.htm\">Full Text</a></li>\n" +
    "\n" +
    "\n" +
    "      <li class=\"right\">Credits</li>"
  );


  $templateCache.put('navigation/nav',
    "<ul id=\"nav-mobile\" class=\"side-nav\" ng-click=\"closeSide()\">\n" +
    "  <div class=\"navigation-side navigation\">\n" +
    "\n" +
    "    <div ui-sref=\"home\" class=\"logo\">\n" +
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
    "        <img ui-sref=\"home\" src=\"/images/logo_saxon.png\" alt=\"\">\n" +
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
