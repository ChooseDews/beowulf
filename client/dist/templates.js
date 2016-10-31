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
    "  <div class=\"col m4 s12 offset-m4\">\n" +
    "    \n" +
    "    <div style=\"margin: 20px\">\n" +
    "    <div input-field>\n" +
    "    <input type=\"text\" class=\"white-text\" ng-model=\"search.name\">\n" +
    "    <label>Search Characters</label>\n" +
    "</div>\n" +
    "      </div>\n" +
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
    "      \n" +
    "      \n" +
    "       <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"card-content\">\n" +
    "\n" +
    "          \n" +
    "                    <span class=\"card-title\">{{character.name}}'s Relationships</span>\n" +
    "\n" +
    "\n" +
    "               <ul class=\"collection\">\n" +
    "      <li class=\"collection-item\" ng-repeat=\"r in character.relationships\" ui-sref=\"character({id: r.id})\">{{r.name}} - {{r.relationship}}</li>\n" +
    "               \n" +
    "\n" +
    "\n" +
    "    </ul>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      \n" +
    "      \n" +
    "            \n" +
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


  $templateCache.put('credits/credit',
    "<div class=\"credits\">\n" +
    "\n" +
    "<br><Br>\n" +
    "\n" +
    "  <h1 class=\"center\">Credits and Attributions</h1>\n" +
    "<br><Br>\n" +
    "\n" +
    "  <div class=\"container\">\n" +
    "\n" +
    "\n" +
    "\n" +
    " <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "      <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "        <span class=\"card-title\">Project</span>\n" +
    "\n" +
    "        \n" +
    "        <p><b>Created By John Dews</b> for my Beowulf Unit Project. Closed Source, rights reserved 2016</p>\n" +
    "        \n" +
    "          \n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "      <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "        <span class=\"card-title\">Timeline</span>\n" +
    "\n" +
    "        <p> Shmoop Editorial Team. \"Beowulf Timeline in Beowulf.\" Shmoop. Shmoop University, Inc., 11 Nov. 2008. Web. 30 Oct. 2016.</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    \n" +
    "      <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "      <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "        <span class=\"card-title\">Character Discription</span>\n" +
    "\n" +
    "        <p>SparkNotes. SparkNotes, n.d. Web. 30 Oct. 2016. & Beowulf Character List Handout</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    \n" +
    "     <div class=\"card\">\n" +
    "\n" +
    "\n" +
    "      <div class=\"card-content\">\n" +
    "\n" +
    "\n" +
    "        <span class=\"card-title\">Character Images</span>\n" +
    "\n" +
    "        <p>    \"Beowulf.\" Beowulf. N.p., n.d. Web. 30 Oct. 2016. http://583626822202864830.weebly.com.\n" +
    "</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
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
    "<div class=\"container\" ng-controller=\"editCharController\" nv-file-drop uploader=\"uploader\">\n" +
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
    "\n" +
    "\n" +
    "      <input-field>\n" +
    "        <input type=\"text\" ng-model=\"character.picture\">\n" +
    "        <label>Picture</label>\n" +
    "      </input-field>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <input-field>\n" +
    "        <textarea ng-model=\"character.disc\" class=\"materialize-textarea\"></textarea>\n" +
    "        <label>Description</label>\n" +
    "      </input-field>\n" +
    "\n" +
    "      <p>\n" +
    "        <input type=\"checkbox\" ng-model=\"character.evil\" id=\"test5\" />\n" +
    "        <label for=\"test5\">Is Evil</label>\n" +
    "      </p>\n" +
    "\n" +
    "      \n" +
    "       <br><br>\n" +
    "\n" +
    "\n" +
    "      <div class=\"row\" ng-repeat=\"r in character.relationships\">\n" +
    "\n" +
    "        <div class=\"col s4\">\n" +
    "          <input-field>\n" +
    "            <input type=\"text\" ng-model=\"r.id\">\n" +
    "            <label>Id</label>\n" +
    "          </input-field>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col s4\">\n" +
    "          <input-field>\n" +
    "            <input type=\"text\" ng-model=\"r.relationship\">\n" +
    "            <label>Relationship</label>\n" +
    "          </input-field>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"col s4\">\n" +
    "          <input-field>\n" +
    "            <input type=\"text\" ng-model=\"r.name\">\n" +
    "            <label>Name</label>\n" +
    "          </input-field>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <a class=\"waves-effect waves-light btn red\" ng-click=\"update(character)\">Update</a>\n" +
    "      <a class=\"waves-effect waves-light btn red\" ng-click=\"addRelationship()\">Add Relationship</a>\n" +
    "\n" +
    "      <br><br><br>\n" +
    "      <hr>\n" +
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
    "  <a class=\"btn btn-flat white btn-large timeline-btn\" ui-sref=\"timeline\">See The Timeline</a>\n" +
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
    "<user-card ui-sref=\"character({id: character.id})\">\n" +
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
    "      <li ui-sref=\"timeline\">Timeline</li>\n" +
    "\n" +
    "      <li><a style=\"color: white !important;\" href=\"https://www.gutenberg.org/files/16328/16328-h/16328-h.htm\">Full Text</a></li>\n" +
    "\n" +
    "\n" +
    "      <li class=\"right\"  ui-sref=\"credits\">Credits</li>"
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


  $templateCache.put('timeline/time',
    "<div class=\"time sea-blue\">\n" +
    "\n" +
    "\n" +
    "  <img class=\"boat\" src=\"/images/boat.png\" alt=\"\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div class=\"timeline\">\n" +
    "\n" +
    "    <section class=\"intro\">\n" +
    "      <div class=\"container\">\n" +
    "      </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"timeline\">\n" +
    "      <ul>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf, along with a group of Geatish warriors, sails across the sea to the land of the Danes to fight the demon Grendel. </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf is graciously received by King Hrothgar and Queen Wealhtheow, who gratefully accept his offer of help. </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            When Grendel attacks Heorot Hall, Beowulf meets him in hand-to-hand combat. Beowulf tears Grendel's arm from his socket, mortally wounding the monster.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf is thanked by King Hrothgar, who bestows rich gifts on him and hosts a feast in his honor.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf goes to sleep after the feast, but in his absence Heorot is attacked again by Grendel's mother.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            He tracks Grendel's mother to her lair in a cave under a lake and kills her with a sword he finds there.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf returns to the surface with Grendel's head and the hilt of the sword that killed Grendel's mother.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf receives additional gifts and thanks from King Hrothgar.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            He and his followers return to Geatland.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            Beowulf presents the gifts he has received from Hrothgar to Hygelac.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            After Hygelac and his kinsmen are killed in battle, Beowulf becomes the king of the Geats and reigns for fifty years.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "            When he hears about a marauding dragon, Beowulf suspects that he will die fighting it.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "          <div>\n" +
    "\n" +
    "            Beowulf tracks the dragon to its lair and fights it with the help of his follower, Wiglaf.\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "\n" +
    "            Beowulf kills the dragon, but receives a mortal wound in the fight.\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "\n" +
    "            He asks Wiglaf to bring some of the dragon's treasure to the surface to show him before he dies.\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "\n" +
    "            Having gazed on the treasure and given his golden necklace to Wiglaf, Beowulf dies.\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div>\n" +
    "\n" +
    "            Beowulf's body is burned on a funeral pyre by his people and a barrow is built on the site to honor him.\n" +
    "\n" +
    "\n" +
    "          </div>\n" +
    "        </li>\n" +
    "\n" +
    "      </ul>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <br><br><br><br>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>"
  );

}]);
