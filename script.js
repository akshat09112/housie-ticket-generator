$(document).ready(function(){
        var families=["Amit","Anju","Neelu","Sunita","Chitra","Reena","Nonu"];
        result();
        $("#card").html("click to go to "+families[1]+"'s tickets");
        $("#names").html(families[0]);
        var i=0;
        $("#name0").html((154+10*i));
        $("#name1").html((155+10*i));
        $("#name2").html((156+10*i));
        $("#name3").html((157+10*i));
        $("#name4").html((158+10*i));
        $("#name5").html((159+10*i));
        i++;
        $('#card').click(function(){
            clear();
            result();
            $("#card").html("click to go to "+families[(i+1)%7]+"'s tickets");
            $("#names").html(families[i%7]);
            $("#name0").html((154+10*(i%7)));
            $("#name1").html((155+10*(i%7)));
            $("#name2").html((156+10*(i%7)));
            $("#name3").html((157+10*(i%7)));
            $("#name4").html((158+10*(i%7)));
            $("#name5").html((159+10*(i%7)));
            i++;
        });
});
function clear(){
    
    for(var i=1;i<=6;i++)
    {
        for(var j=1;j<=9;j++)
        {
            $("#table"+(i)).find("#cell1"+j).html("");
            $("#table"+(i)).find("#cell2"+j).html("");
            $("#table"+(i)).find("#cell3"+j).html("");
        }
    }
}
function result(){
    var set1=new Set([1,2,3,4,5,6,7,8,9]);
        
        var set2=new Set([10,11,12,13,14,15,16,17,18,19]);
        var set3=new Set([20,21,22,23,24,25,26,27,28,29]);
        var set4=new Set([30,31,32,33,34,35,36,37,38,39]);
        var set5=new Set([40,41,42,43,44,45,46,47,48,49]);
        var set6=new Set([50,51,52,53,54,55,56,57,58,59]);
        var set7=new Set([60,61,62,63,64,65,66,67,68,69]);
        var set8=new Set([70,71,72,73,74,75,76,77,78,79]);
        var set9=new Set([80,81,82,83,84,85,86,87,88,89,90]);
        var ticket1=new Set();
        var ticket2=new Set();
        var ticket3=new Set();
        var ticket4=new Set();
        var ticket5=new Set();
        var ticket6=new Set();
        var check1=[];
        var check2=[];
        var check3=[];
        var check4=[];
        var check5=[];
        var check6=[];
        var num=[];
        var array1=[];
        var check=[];
        for(var i=0;i<6;i++)
        {
            num.push(0);
        }
    publish();
    
    function getRndmFromSet(set,ticket,check,k)
    {
        var rndm = Math.floor(Math.random() * set.size);
        var arr=[];
        for(const k of set.values()){
            arr.push(k);
        } 
        ticket.add(arr[rndm]);
        
        set.delete(arr[rndm]);
        
        check[k]+=1;
    }
    function myd(set)
    {
        var rndm=Math.floor(Math.random()*set.size);
        var arr=[];
        for(const k of set.values()){
            arr.push(k);
        }
        return arr[rndm];
    }
    function sortf(array1)
    {
        for(var i=0;i<6;i++)
        {
            array1[i].sort(function(a, b){return a-b});
        }
    }
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    function publish(){
        
        for(var i=0;i<9;i++)
        {
            check1.push(0);
            check2.push(0);
            check3.push(0);
            check4.push(0);
            check5.push(0);
            check6.push(0);
        }
        getRndmFromSet(set1,ticket1,check1,0);
        
        getRndmFromSet(set1,ticket2,check2,0);
        getRndmFromSet(set1,ticket3,check3,0);
        getRndmFromSet(set1,ticket4,check4,0);
        getRndmFromSet(set1,ticket5,check5,0);
        getRndmFromSet(set1,ticket6,check6,0);
        getRndmFromSet(set2,ticket1,check1,1);
        getRndmFromSet(set2,ticket2,check2,1);
        getRndmFromSet(set2,ticket3,check3,1);
        getRndmFromSet(set2,ticket4,check4,1);
        getRndmFromSet(set2,ticket5,check5,1);
        getRndmFromSet(set2,ticket6,check6,1);
        getRndmFromSet(set3,ticket1,check1,2);
        getRndmFromSet(set3,ticket2,check2,2);
        getRndmFromSet(set3,ticket3,check3,2);
        getRndmFromSet(set3,ticket4,check4,2);
        getRndmFromSet(set3,ticket5,check5,2);
        getRndmFromSet(set3,ticket6,check6,2);
        getRndmFromSet(set4,ticket1,check1,3);
        getRndmFromSet(set4,ticket2,check2,3);
        getRndmFromSet(set4,ticket3,check3,3);
        getRndmFromSet(set4,ticket4,check4,3);
        getRndmFromSet(set4,ticket5,check5,3);
        getRndmFromSet(set4,ticket6,check6,3);
        getRndmFromSet(set5,ticket1,check1,4);
        getRndmFromSet(set5,ticket2,check2,4);
        getRndmFromSet(set5,ticket3,check3,4);
        getRndmFromSet(set5,ticket4,check4,4);
        getRndmFromSet(set5,ticket5,check5,4);
        getRndmFromSet(set5,ticket6,check6,4);
        getRndmFromSet(set6,ticket1,check1,5);
        getRndmFromSet(set6,ticket2,check2,5);
        getRndmFromSet(set6,ticket3,check3,5);
        getRndmFromSet(set6,ticket4,check4,5);
        getRndmFromSet(set6,ticket5,check5,5);
        getRndmFromSet(set6,ticket6,check6,5);
        getRndmFromSet(set7,ticket1,check1,6);
        getRndmFromSet(set7,ticket2,check2,6);
        getRndmFromSet(set7,ticket3,check3,6);
        getRndmFromSet(set7,ticket4,check4,6);
        getRndmFromSet(set7,ticket5,check5,6);
        getRndmFromSet(set7,ticket6,check6,6);
        getRndmFromSet(set8,ticket1,check1,7);
        getRndmFromSet(set8,ticket2,check2,7);
        getRndmFromSet(set8,ticket3,check3,7);
        getRndmFromSet(set8,ticket4,check4,7);
        getRndmFromSet(set8,ticket5,check5,7);
        getRndmFromSet(set8,ticket6,check6,7);
        getRndmFromSet(set9,ticket1,check1,8);
        getRndmFromSet(set9,ticket2,check2,8);
        getRndmFromSet(set9,ticket3,check3,8);
        getRndmFromSet(set9,ticket4,check4,8);
        getRndmFromSet(set9,ticket5,check5,8);
        getRndmFromSet(set9,ticket6,check6,8);
        for(var i=0;i<6;i++)
        {
            num[i]=9;
        }
        var rand=Math.ceil(Math.random()*6);
        if(rand==1)
        {
            getRndmFromSet(set9,ticket1,check1,8);
        }
        if(rand==2)
        {
            getRndmFromSet(set9,ticket2,check2,8);
        }
        if(rand==3)
        {
            getRndmFromSet(set9,ticket3,check3,8);
        }
        if(rand==4)
        {
            getRndmFromSet(set9,ticket4,check4,8);
        }
        if(rand==5)
        {
            getRndmFromSet(set9,ticket5,check5,8);
        }
        if(rand==6)
        {
            getRndmFromSet(set9,ticket6,check6,8);
        }
        num[rand-1]+=1;
        
        for(var i=0;i<9;i++)
        {
            var tickets=new Set([1,2,3,4,5,6]);
            
            for(var j=0;j<3;j++)
            {
                for(var c=0;c<6;c++)
                {
                    if(num[c]==15)
                    {
                        tickets.delete(c+1);
                    }
                }
                if(i==0)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set1,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set1,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set1,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set1,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set1,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set1,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==1)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set2,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set2,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set2,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set2,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set2,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set2,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==2)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set3,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set3,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set3,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set3,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set3,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set3,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==3)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set4,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set4,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set4,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set4,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set4,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set4,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==4)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set5,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set5,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set5,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set5,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set5,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set5,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==5)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set6,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set6,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set6,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set6,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set6,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set6,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==6)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set7,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set7,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set7,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set7,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set7,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set7,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==7)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set8,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set8,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set8,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set8,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set8,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set8,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
                if(i==8)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set9,ticket1,check1,i);
                        if(check1[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set9,ticket2,check2,i);
                        if(check2[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set9,ticket3,check3,i);
                        if(check3[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set9,ticket4,check4,i);
                        if(check4[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set9,ticket5,check5,i);
                        if(check5[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set9,ticket6,check6,i);
                        if(check6[i]==3)
                        {
                            tickets.delete(t);
                        }
                    }
                }
            }
        }
        
        
        for(var i=1;i<9;i++)
        {
            var tickets=new Set();
            if(check1[i]<3)
            {
                tickets.add(1);
            }
            if(check2[i]<3)
            {
                tickets.add(2);
            }
            if(check3[i]<3)
            {
                tickets.add(3);
            }
            if(check4[i]<3)
            {
                tickets.add(4);
            }
            if(check5[i]<3)
            {
                tickets.add(5);
            }
            if(check6[i]<3)
            {
                tickets.add(6);
            }
            
            for(var c=0;c<6;c++)
            {
                if(num[c]==15)
                {
                    tickets.delete(c+1);
                }
            }
            

            if(i==1)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set2,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set2,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set2,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set2,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set2,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set2,ticket6,check6,i);
                       
                    }
                }
                if(i==2)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set3,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set3,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set3,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set3,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set3,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set3,ticket6,check6,i);
                        
                    }
                }
                if(i==3)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set4,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set4,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set4,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set4,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set4,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set4,ticket6,check6,i);
                        
                    }
                }
                if(i==4)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set5,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set5,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set5,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set5,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set5,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set5,ticket6,check6,i);
                        
                    }
                }
                if(i==5)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set6,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set6,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set6,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set6,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set6,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set6,ticket6,check6,i);
                        
                    }
                }
                if(i==6)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set7,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set7,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set7,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set7,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set7,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set7,ticket6,check6,i);
                        
                    }
                }
                if(i==7)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set8,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set8,ticket2,check2,i);
                       
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set8,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set8,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set8,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set8,ticket6,check6,i);
                        
                    }
                }
                if(i==8)
                {
                    var t=myd(tickets);
                    num[t-1]+=1;
                    if(t==1)
                    {
                        getRndmFromSet(set9,ticket1,check1,i);
                        
                    }
                    if(t==2)
                    {
                        getRndmFromSet(set9,ticket2,check2,i);
                        
                    }
                    if(t==3)
                    {
                        getRndmFromSet(set9,ticket3,check3,i);
                        
                    }
                    if(t==4)
                    {
                        getRndmFromSet(set9,ticket4,check4,i);
                        
                    }
                    if(t==5)
                    {
                        getRndmFromSet(set9,ticket5,check5,i);
                        
                    }
                    if(t==6)
                    {
                        getRndmFromSet(set9,ticket6,check6,i);
                        
                    }
                }
        }
        
        var array=[];
        for(const k of ticket1.values())
        {
            array.push(k);   
        }
        array1.push(array);
        array=[];
        for(const k of ticket2.values())
        {
            array.push(k);   
        }
        array1.push(array);
        array=[];
        for(const k of ticket3.values())
        {
            array.push(k);   
        }
        array1.push(array);
        array=[];
        for(const k of ticket4.values())
        {
            array.push(k);   
        }
        array1.push(array);
        array=[];
        for(const k of ticket5.values())
        {
            array.push(k);   
        }
        array1.push(array);
        array=[];
        for(const k of ticket6.values())
        {
            array.push(k);   
        }
        array1.push(array);
        sortf(array1);
        array=[];
        for(const k of check1.values())
        {
            array.push(k);   
        }
        check.push(array);
        array=[];
        for(const k of check2.values())
        {
            array.push(k);   
        }
        check.push(array);
        array=[];
        for(const k of check3.values())
        {
            array.push(k);   
        }
        check.push(array);
        array=[];
        for(const k of check4.values())
        {
            array.push(k);   
        }
        check.push(array);
        array=[];
        for(const k of check5.values())
        {
            array.push(k);   
        }
        check.push(array);
        array=[];
        for(const k of check6.values())
        {
            array.push(k);   
        }
        check.push(array);
        console.log(check);
        for(var i=0;i<6;i++)
        {
            console.log(array1[i]);
            var one=0;
            var two=0;
            var three=0;
            var k=0;
            var sets=[1,2,3];
            var res=[];
            var sum=0;
            for(var j=0;j<9;j++)
            {
                if(check[i][j]==3)
                {
                    var a=array1[i][sum];
                    var b=array1[i][sum+1];
                    var c=array1[i][sum+2];
                    one++;
                    two++;
                    three++;
                    sum+=check[i][j];
                    console.log(a);
                    console.log(b);
                    console.log(c);
                    $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                    $("#table"+(i+1)).find("#cell2"+(j+1)).html(b);
                    $("#table"+(i+1)).find("#cell3"+(j+1)).html(c);
                }
                else{
                    sum+=check[i][j];
                }
            }
            sum=0;
            for(var j=0;j<9;j++)
            {
                if(check[i][j]==2)
                {
                    var a=array1[i][sum];
                    var b=array1[i][sum+1];
                    var r=Math.ceil(Math.random()*2);
                    if(r==1)
                    {
                        if(one<5){
                        $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                        one++;
                        var t=Math.floor(Math.random()*2);
                        if(t==0)
                        {
                            if(two!=5){

                            $("#table"+(i+1)).find("#cell2"+(j+1)).html(b);
                            two++;}
                            else{
                                t=1;
                            }
                        }
                        if(t==1 && three<5)
                        {
                            $("#table"+(i+1)).find("#cell3"+(j+1)).html(b);
                            three++; 
                        }
                    }
                    else{
                        $("#table"+(i+1)).find("#cell2"+(j+1)).html(a);
                        two++;
                        $("#table"+(i+1)).find("#cell3"+(j+1)).html(b);
                        three++;
                    }
                    }
                    if(r==2)
                    {
                        if(two==5)
                        {
                            $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                            one++;
                            $("#table"+(i+1)).find("#cell3"+(j+1)).html(b);
                            three++;
                        }

                        else{
                            if(three==5)
                            {
                                $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                                one++;
                                $("#table"+(i+1)).find("#cell2"+(j+1)).html(b);
                                two++;
                            }
                            else{
                                $("#table"+(i+1)).find("#cell2"+(j+1)).html(a);
                                two++;
                                $("#table"+(i+1)).find("#cell3"+(j+1)).html(b);
                                three++;
                            }
                        }
                    }
                }
                sum+=check[i][j];
            }
            sum=0;
            for(var j=0;j<9;j++)
            {
                if(check[i][j]==1)
                {
                    var a=array1[i][sum];
                    var r=Math.ceil(Math.random()*3);
                    if(r==1)
                    {
                        if(one!=5)
                        {
                            $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                            one++;
                        }
                        else
                        {
                            if(two!=5)
                            {
                                $("#table"+(i+1)).find("#cell2"+(j+1)).html(a);
                                two++;
                            }
                            else
                            {
                                $("#table"+(i+1)).find("#cell3"+(j+1)).html(a);
                                three++;
                            }
                        }
                    }
                    else if(r==2){
                        if(two!=5)
                        {
                            $("#table"+(i+1)).find("#cell2"+(j+1)).html(a);
                            two++;
                        }
                        else
                        {
                            if(three!=5)
                            {
                                $("#table"+(i+1)).find("#cell3"+(j+1)).html(a);
                                three++;
                            }
                            else
                            {
                                $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                                one++;
                            }
                        }
                    }
                    else{
                        if(three!=5)
                        {
                            $("#table"+(i+1)).find("#cell3"+(j+1)).html(a);
                            three++;
                        }
                        else
                        {
                            if(one!=5)
                            {
                                $("#table"+(i+1)).find("#cell1"+(j+1)).html(a);
                                one++;
                            }
                            else
                            {
                                $("#table"+(i+1)).find("#cell2"+(j+1)).html(a);
                                two++;
                            }
                        }
                    }
                }
                sum+=check[i][j];
            }

        }

    }
}

