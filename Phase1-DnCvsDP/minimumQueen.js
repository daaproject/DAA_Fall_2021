var arr = new Array();
var Raw;
var column;

function inputArr(){
    
    var input = document.getElementById("text1").value;
    Raw=input;
    column=input;
	//Declare array
    var center = document.createElement('right');
    for (var i = 0; i < input; i++) {
        arr[i]=new Array();
		//allocation 0 to all array element
        for(var j=0;j<input;j++){

            arr[i][j]=0;
        }
    }
    
 
    if(input < 9){    
        var ChessTable = document.createElement('table');
        ChessTable.setAttribute('class','c1')
        
        for (var i = 0; i < input; i++) {
 
            // Create a row
            //arr[i]=new Array();
            var tr = document.createElement('tr');
            for (var j = 0; j < input; j++) {

                var td = document.createElement('td');
                
				//If true print none
                if ((i + j) % input == 0) {
                    td.innerHTML="&#9819;"
                    td.setAttribute('class', 'cell blackcell');
                    tr.appendChild(td);
                }
				//If false print queen
                else {
					td.innerHTML="0"
                    td.setAttribute('class', 'cell whitecell');
                    tr.appendChild(td);
                }
            }
            ChessTable.appendChild(tr);
        }
        center.appendChild(ChessTable);
 
        ChessTable.setAttribute('cellspacing', '0');
        ChessTable.setAttribute('width', '270px');
        document.body.appendChild(center);
    }
    else{
        alert('Your limit exceed...')
    }
        
}

