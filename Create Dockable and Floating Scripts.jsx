// dockable script
// https://www.provideocoalition.com/after-effects-extendscript-training-ep-12/
{
   function myScript(thisObj){
      function myScript_buildUI(thisObj){
         var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: false});
         
         res = "group{orientation:'column',\
                        groupOne: Group{orientation:'row',\
                        createCompButton: Button{text:'Create Comp'},\
               },\
               groupTwo: Panel{orientation:'row',\
                        myText: StaticText{text:'Just some other UI stuff'},\
               },\
               groupThree: Group{orientation:'row',\
               closeButton: Button{text:'Close'},\
               },\
         }";

         myPanel.grp = myPanel.add(res);

         //Defaults (put your methods and UI declarations here)
         myPanel.grp.groupOne.createCompButton.onClick = function() {
             //var comp = app.project.items.addComp();
             //comp.openInViewer();
             }
         
        myPanel.grp.groupThree.closeButton.onClick = function() {
            myPanel.close();
            }
    
         
         myPanel.layout.layout(true);

         return myPanel;
      }
   
   
      var myScriptPal = myScript_buildUI(thisObj);

      if (myScriptPal != null && myScriptPal instanceof Window){
         myScriptPal.center();
         myScriptPal.show();
      }

   }
   myScript(this);
}

// floating script
// https://creativepro.com/files/kahrel/indesign/scriptui.html
var window = new Window("palette", "Floating Script", undefined, {closeButton: false});
window.orientation = "column";

var groupOne = window.add("group", undefined, "groupOne");
groupOne.orientation = "row";
var createCompButton = groupOne.add("button", undefined, "Create Comp");

var groupTwo = window.add("panel", undefined, "");
groupTwo.orientation = "row";
var myText = groupTwo.add("statictext", undefined, "Just some other UI stuff");

var groupThree = window.add("group", undefined, "groupThree");
groupThree.orientation = "row";
var closeButton = groupThree.add("button", undefined, "Close");

closeButton.onClick = function() {
        window.close();
    }

createCompButton.onClick = function() {
        //var comp = app.project.items.addComp();
        //comp.openInViewer();
    }

window.center();
window.show();

// alternative method
// https://after-effects-scripting-guide.readthedocs.io/_/downloads/en/latest/pdf/ (page 5)
function createUI(thisObj) {
var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Alternate Method", undefined, {closeButton: false});
myPanel.orientation = "column";

var groupOne = myPanel.add("group", undefined, "groupOne");
groupOne.orientation = "row";
var createCompButton = groupOne.add("button", undefined, "Create Comp");

var groupTwo = myPanel.add("panel", undefined, "");
groupTwo.orientation = "row";
var myText = groupTwo.add("statictext", undefined, "Just some other UI stuff");

var groupThree = myPanel.add("group", undefined, "groupThree");
groupThree.orientation = "row";
var closeButton = groupThree.add("button", undefined, "Close");

closeButton.onClick = function() {
        myPanel.close();
    }

return myPanel;
}

var myToolsPanel = createUI(this);
myToolsPanel.center();
myToolsPanel.show();