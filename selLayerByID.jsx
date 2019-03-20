////////////////////////////////////////////////////////////////////////////////////////////////////
// Name         : selectLayerByID - Adobe Photoshop Script 
// Description  : Selects Layer by Id, if second parameter is true, th selection will be added
// Requirements : Adobe Photoshop CS2, or higher
// Date         : 19/March/2019
////////////////////////////////////////////////////////////////////////////////////////////////////
#target photoshop 

app.bringToFront();
main();

////////////////////////////////////////////////////////////////////////////////////////////////////
// main - main function
////////////////////////////////////////////////////////////////////////////////////////////////////

function main(){
	var c2t = function (s) {return app.charIDToTypeID(s);};
	var s2t = function (s) {return app.stringIDToTypeID(s);	};
	
	selectLayerById(6);	        //select this layer only
	selectLayerById(3,true);	//select this layer along with other selected layers
    
    //Ebene anhand der ID selektieren
    function selectLayerById(id,add){
        add = (add == undefined) ? add = false : add;
        var ref = new ActionReference();  
        var desc = new ActionDescriptor();                  
        ref.putIdentifier(s2t('layer'), id);        
        desc.putReference(c2t("null"), ref );
        
        if(add) {
            desc.putEnumerated( s2t( "selectionModifier" ), s2t( "selectionModifierType" ), s2t( "addToSelection" ) );
            desc.putBoolean( s2t( "makeVisible" ), false );
        }try{
            executeAction(s2t("select"), desc, DialogModes.NO );
        }catch(e){}
    }

}
