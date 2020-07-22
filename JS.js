//create event in the btn
var btn = document.getElementById("sub");
var c = document.getElementById("output");
btn.onclick = WriteTxt;
var q = document.getElementById("xxx");
// function of write txt
var txt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Morbi tempus iaculis urna id.Urna condimentum mattis pellentesque id nibh tortor id.In metus vulputate eu scelerisque felis.
Nec feugiat in fermentum posuere urna nec tincidunt praesent.Faucibus turpis in eu mi.
Hendrerit gravida rutrum quisque non tellus orci ac.Mauris ultrices eros in cursus.
Mattis rhoncus urna neque viverra justo nec ultrices.Viverra orci sagittis eu volutpat odio facilisis mauris.
Vel pretium lectus quam id leo in vitae turpis massa.Adipiscing elit pellentesque habitant morbi tristique senectus et netus
    .Non pulvinar neque laoreet suspendisse interdum consectetur libero id.Mi bibendum neque egestas congue quisque egestas.
Ut tellus elementum sagittis vitae et leo duis ut diam.Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.Scelerisque eu ultrices vitae auctor eu augue.`;
function WriteTxt() {
    var num = document.getElementById("val");
    c.innerText = "";
    q.innerText = "";
    var pws = document.getElementById("selec");
    var sel = pws.value;
    switch (sel) {
        case 'p': {
            for (var i = 0; i < num.value; i++) {
                var text = document.createElement("p");
                var r1 = Math.round(Math.random() * 100);
                var r2 = Math.round(Math.random() * 10000);
               
                if (r2 != r1 && r2 > 200 && r1 < 70) {
                    text.innerHTML = txt.substr(r1, r2);
                }
                else {
                    text.innerHTML = txt;
                 
                }
                c.appendChild(text);

            }
            CopyText(c.innerText);

          
        }
            break;
        case 's':
            {
                var r2 = Math.round(Math.random() * 10000);
                for (var i = 0; i < num.value; i++) {
                    var s = txt.indexOf(".");

                    var r1 = Math.round(Math.random() * 100);
                    var r2 = Math.round(Math.random() * 10000);


                    var text = document.createElement("p");
                    
                    text.innerHTML = txt.substr(0, s) +".";
                    
                    c.appendChild(text);

                }

                CopyText(c.innerText);

            }
            break;
        case 'w':
            {
                var r2 = Math.round(Math.random() * 10000);
                for (var i = 0; i < num.value; i++) {
                    var s = txt.indexOf(" ");

                    //var r1 = Math.round(Math.random() * 100);
                    //var r2 = Math.round(Math.random() * 10000);


                    var text = document.createElement("p");

                    text.innerHTML = txt.substr(0, s);
                    
                    c.appendChild(text);
                    CopyText(c.innerText);

                }
                break;
            }
    }
}


//this is function about copy


function CopyText(s)
{
    var x = document.createElement("textarea");
    x.innerHTML = s;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
}


var bt = document.getElementById("ctr");
bt.onclick = function () {
  var  words = c.innerText;
    if (words  == "") {
        alert("text is empty");
    }
    else {
        alert("text copied")
    }
}