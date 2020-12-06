$(document).ready(function(){

    $("#tabs").tabs();
    $(".hometext").show();
    $(".redtext").hide();
    $(".orangetext").hide();
    $(".yellowtext").hide();
    $(".greentext").hide();
    $(".bluetext").hide();
    $(".purpletext").hide();
    $(".nowplaying").hide();
    $(".redplaying").hide();
    $(".orangeplaying").hide();
    $(".yellowplaying").hide();
    $(".greenplaying").hide();
    $(".blueplaying").hide();
    $(".purpleplaying").hide();

    // BOSS BITCH
    var bossbitchaudio = new Audio("bossbitch.mp3");

    // BOOSTER
    var boosteraudio = new Audio("Booster.mp3");

    // LEMON   
    var lemonaudio = new Audio("lemon.mp3");

    // FEEL IT STILL
    var feelitstillaudio = new Audio("feelitstill.mp3");

    // ANIMAL
    var animalaudio = new Audio("Animal.mp3");

    // NINE LIVES
    var ninelivesaudio = new Audio("ninelives.mp3");

    // BRIGHT
    var brightaudio = new Audio("bright.mp3") ;

    // SHAKE IT OFF
    var shakeitoffaudio = new Audio("shakeitoff.mp3");

    // ELECTRIC LOVE
    var electricloveaudio = new Audio("electriclove.mp3");

    // OPEN YOUR MIND
    var openyourmindaudio = new Audio("openyourmind.mp3");

    // LOST IN JAPAN
    var lostinjapanaudio = new Audio("lostinjapan.mp3");

    // SAY SO
    var saysoaudio = new Audio("sayso.mp3")

    // BITCHES BROKEN HEARTS
    var bitchesbrokenheartsaudio = new Audio("bitchesbrokenhearts.mp3");

    // BEST PART
    var bestpartaudio = new Audio("bestpart.mp3");

    // MAYDAY
    var maydayaudio = new Audio("mayday.mp3")

    // IT'S RAINING SOMEWHERE ELSE
    var undertaleaudio = new Audio("undertale.mp3");

    // ROYALS
    var royalsaudio = new Audio("royals.mp3");

    // UNRAVEL
    var unravelaudio = new Audio("unravel.mp3");

    function allmute(){
        boosteraudio.pause();
        lemonaudio.pause();
        bossbitchaudio.pause();
        feelitstillaudio.pause();
        animalaudio.pause();
        ninelivesaudio.pause();
        brightaudio.pause();
        shakeitoffaudio.pause();
        electricloveaudio.pause();
        openyourmindaudio.pause();
        lostinjapanaudio.pause();
        saysoaudio.pause();
        bitchesbrokenheartsaudio.pause();
        bestpartaudio.pause();
        maydayaudio.pause();
        undertaleaudio.pause();
        royalsaudio.pause();
        unravelaudio.pause();
    }

    function hidecolorplaying(){
        $(".redplaying").hide();
        $(".orangeplaying").hide();
        $(".yellowplaying").hide();
        $(".greenplaying").hide();
        $(".blueplaying").hide();
        $(".purpleplaying").hide();
    }




    $(".red").mouseenter(function(){
        $(".red").fadeTo(300, 0.9);
    })
    $(".red").mouseleave(function(){
        $(".red").fadeTo(300, 1);
    })
    $(".orange").mouseenter(function(){
        $(".orange").fadeTo(300, 0.9);
    })
    $(".orange").mouseleave(function(){
        $(".orange").fadeTo(300, 1);
    })
    $(".yellow").mouseenter(function(){
        $(".yellow").fadeTo(300, 0.9);
    })
    $(".yellow").mouseleave(function(){
        $(".yellow").fadeTo(300, 1);
    })
    $(".green").mouseenter(function(){
        $(".green").fadeTo(300, 0.9);
    })
    $(".green").mouseleave(function(){
        $(".green").fadeTo(300, 1);
    })
    $(".blue").mouseenter(function(){
        $(".blue").fadeTo(300, 0.9);
    })
    $(".blue").mouseleave(function(){
        $(".blue").fadeTo(300, 1);
    })
    $(".purple").mouseenter(function(){
        $(".purple").fadeTo(300, 0.9);
    })
    $(".purple").mouseleave(function(){
        $(".purple").fadeTo(300, 1);
    })
    

    function redpage(){
        $(".red").animate({"backgroundColor":"#C1272D"}, 'slow');
        $(".content").animate({"backgroundColor":"#C1272D"}, 'slow');

        $(".orange").animate({"backgroundColor":"#81331D"}, 'slow');
        $(".yellow").animate({"backgroundColor":"#845320"}, 'slow');
        $(".green").animate({"backgroundColor":"#043A1D"}, 'slow');
        $(".blue").animate({"backgroundColor":"#181D51"}, 'slow');
        $(".purple").animate({"backgroundColor":"#3A1C50"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").show(1000);
        $(".orangetext").hide(1000);
        $(".yellowtext").hide(1000);
        $(".greentext").hide(1000);
        $(".bluetext").hide(1000);
        $(".purpletext").hide(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    function orangepage(){
        $(".orange").animate({"backgroundColor":"#F15A24"}, 'slow');
        $(".content").animate({"backgroundColor":"#F15A24"}, 'slow');

        $(".red").animate({"backgroundColor":"#69161C"}, 'slow');
        $(".yellow").animate({"backgroundColor":"#845320"}, 'slow');
        $(".green").animate({"backgroundColor":"#043A1D"}, 'slow');
        $(".blue").animate({"backgroundColor":"#181D51"}, 'slow');
        $(".purple").animate({"backgroundColor":"#3A1C50"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").hide(1000);
        $(".orangetext").show(1000);
        $(".yellowtext").hide(1000);
        $(".greentext").hide(1000);
        $(".bluetext").hide(1000);
        $(".purpletext").hide(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    function yellowpage(){
        $(".yellow").animate({"backgroundColor":"#F7931E"}, 'slow');
        $(".content").animate({"backgroundColor":"#F7931E"}, 'slow');

        $(".red").animate({"backgroundColor":"#69161C"}, 'slow');
        $(".orange").animate({"backgroundColor":"#81331D"}, 'slow');
        $(".green").animate({"backgroundColor":"#043A1D"}, 'slow');
        $(".blue").animate({"backgroundColor":"#181D51"}, 'slow');
        $(".purple").animate({"backgroundColor":"#3A1C50"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").hide(1000);
        $(".orangetext").hide(1000);
        $(".yellowtext").show(1000);
        $(".greentext").hide(1000);
        $(".bluetext").hide(1000);
        $(".purpletext").hide(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    function greenpage(){
        $(".green").animate({"backgroundColor":"#006837"}, 'slow');
        $(".content").animate({"backgroundColor":"#006837"}, 'slow');

        $(".red").animate({"backgroundColor":"#69161C"}, 'slow');
        $(".orange").animate({"backgroundColor":"#81331D"}, 'slow');
        $(".yellow").animate({"backgroundColor":"#845320"}, 'slow');
        $(".blue").animate({"backgroundColor":"#181D51"}, 'slow');
        $(".purple").animate({"backgroundColor":"#3A1C50"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").hide(1000);
        $(".orangetext").hide(1000);
        $(".yellowtext").hide(1000);
        $(".greentext").show(1000);
        $(".bluetext").hide(1000);
        $(".purpletext").hide(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    function bluepage(){
        $(".blue").animate({"backgroundColor":"#2E3192"}, 'slow');
        $(".content").animate({"backgroundColor":"#2E3192"}, 'slow');

        $(".red").animate({"backgroundColor":"#69161C"}, 'slow');
        $(".orange").animate({"backgroundColor":"#81331D"}, 'slow');
        $(".yellow").animate({"backgroundColor":"#845320"}, 'slow');
        $(".green").animate({"backgroundColor":"#043A1D"}, 'slow');
        $(".purple").animate({"backgroundColor":"#3A1C50"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").hide(1000);
        $(".orangetext").hide(1000);
        $(".yellowtext").hide(1000);
        $(".greentext").hide(1000);
        $(".bluetext").show(1000);
        $(".purpletext").hide(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    function purplepage(){
        $(".purple").animate({"backgroundColor":"#662D91"}, 'slow');
        $(".content").animate({"backgroundColor":"#662D91"}, 'slow');

        $(".red").animate({"backgroundColor":"#69161C"}, 'slow');
        $(".orange").animate({"backgroundColor":"#81331D"}, 'slow');
        $(".yellow").animate({"backgroundColor":"#845320"}, 'slow');
        $(".green").animate({"backgroundColor":"#043A1D"}, 'slow');
        $(".blue").animate({"backgroundColor":"#181D51"}, 'slow');

        $(".hometext").hide(1000);
        $(".redtext").hide(1000);
        $(".orangetext").hide(1000);
        $(".yellowtext").hide(1000);
        $(".greentext").hide(1000);
        $(".bluetext").hide(1000);
        $(".purpletext").show(1000);

        $(".nowplaying").show(1000);
        $(".noneplaying").show();
    }

    $(".red").click(function(){
        redpage();
        allmute();
        hidecolorplaying();
    })

    $(".orange").click(function(){
        orangepage();
        allmute();
        hidecolorplaying();
    })

    $(".yellow").click(function(){
        yellowpage();
        allmute();
        hidecolorplaying();
    })

    $(".green").click(function(){
       greenpage();
       allmute();
       hidecolorplaying();
    })

    $(".blue").click(function(){
        bluepage();
        allmute();
        hidecolorplaying();
    })

    $(".purple").click(function(){
        purplepage();
        allmute();
        hidecolorplaying();
    })

    

    $(".stop").click(function(){
        allmute();
        $(".redplaying").hide();
        $(".orangeplaying").hide();
        $(".yellowplaying").hide();
        $(".greenplaying").hide();
        $(".blueplaying").hide();
        $(".purpleplaying").hide();
        $(".noneplaying").show();
    })
    $(".stop").mouseenter(function(){
        $(".stop").fadeTo(200, 0.5);
    })
    $(".stop").mouseleave(function(){
        $(".stop").fadeTo(200, 1);
    })

   
    

    // RED AUDIO PLAYING
    var bossbitchplaying=false;
    var boosterplaying=false;
    var lemonplaying=false;
   
    $(".redplay").click(function(){

        $(".redplaying").show();
        $(".noneplaying").hide();
        var redsong = Math.random();

        console.log("bossbitchbefore",bossbitchplaying);
        console.log("boosterbefore",boosterplaying);
        console.log("lemonbefore",lemonplaying);


        if (bossbitchplaying==true && redsong>0.5){
                // BOOSTER
                boosteraudio.currentTime = 0;
                bossbitchaudio.pause();
                lemonaudio.pause();
                boosteraudio.play();
                
                $(".lemon").hide();
                $(".bossbitch").hide();
                $(".booster").show();
                bossbitchplaying = false;
                boosterplaying = true;
                lemonplaying = false;
                console.log(1);
        } else if (bossbitchplaying==true && redsong<=0.5){
                // LEMON
                lemonaudio.currentTime = 0;
                bossbitchaudio.pause();
                boosteraudio.pause();
                lemonaudio.play();
                
                $(".bossbitch").hide();
                $(".booster").hide();
                $(".lemon").show();
                bossbitchplaying = false;
                boosterplaying = false;
                lemonplaying = true;
                console.log(2);        
        } else if (boosterplaying == true && redsong > 0.5){
                // BOSS BITCH
                bossbitchaudio.currentTime = 0;
                boosteraudio.pause();
                lemonaudio.pause();
                bossbitchaudio.play();
                
                $(".booster").hide();
                $(".lemon").hide();
                $(".bossbitch").show();
                bossbitchplaying = true;
                boosterplaying = false;
                lemonplaying = false;
                console.log(3);
        } else if (boosterplaying == true && redsong <=0.5){
                // LEMON
                lemonaudio.currentTime = 0;
                bossbitchaudio.pause();
                boosteraudio.pause();
                lemonaudio.play();
                
                $(".bossbitch").hide();
                $(".booster").hide();
                $(".lemon").show();
                bossbitchplaying = false;
                boosterplaying = false;
                lemonplaying = true;
                console.log(4);
        } else if (lemonplaying == true && redsong>0.5){
                // BOSS BITCH
                bossbitchaudio.currentTime = 0;
                boosteraudio.pause();
                lemonaudio.pause();
                bossbitchaudio.play();
                
                $(".booster").hide();
                $(".lemon").hide();
                $(".bossbitch").show();
                bossbitchplaying = true;
                boosterplaying = false;
                lemonplaying = false;
                console.log(5);
        } else if (lemonplaying == true && redsong<=0.5){
                // BOOSTER
                boosteraudio.currentTime = 0;
                bossbitchaudio.pause();
                lemonaudio.pause();
                boosteraudio.play();
                
                $(".lemon").hide();
                $(".bossbitch").hide();
                $(".booster").show();
                bossbitchplaying = false;
                boosterplaying = true;
                lemonplaying = false;
                console.log(6);
        } else{
            if (redsong > 0.666){
                // BOSS BITCH
                bossbitchaudio.currentTime = 0;
                boosteraudio.pause();
                lemonaudio.pause();
                bossbitchaudio.play();
                
                $(".booster").hide();
                $(".lemon").hide();
                $(".bossbitch").show();
                bossbitchplaying = true;
                boosterplaying = false;
                lemonplaying = false;
                console.log(7);
                
                
            } else if (redsong >0.333){
                // BOOSTER
                boosteraudio.currentTime = 0;
                bossbitchaudio.pause();
                lemonaudio.pause();
                boosteraudio.play();
                
                $(".lemon").hide();
                $(".bossbitch").hide();
                $(".booster").show();
                bossbitchplaying = false;
                boosterplaying = true;
                lemonplaying = false;
                console.log(8);
                
            } else {
                // LEMON
                lemonaudio.currentTime = 0;
                bossbitchaudio.pause();
                boosteraudio.pause();
                lemonaudio.play();
                
                $(".bossbitch").hide();
                $(".booster").hide();
                $(".lemon").show();
                bossbitchplaying = false;
                boosterplaying = false;
                lemonplaying = true;
                console.log(9);
                
            }
        
        }
        console.log("bossbitchafter",bossbitchplaying);
        console.log("boosterafter",boosterplaying);
        console.log("lemonafter",lemonplaying);
    })

    $(".redplay").mouseenter(function(){
        $(".redplay").fadeTo(200, 0.5);
    })
    $(".redplay").mouseleave(function(){
        $(".redplay").fadeTo(200, 1);
    })



    // ORANGE AUDIO PLAYING
    var feelitstillplaying=false;
    var animalplaying=false;
    var ninelivesplaying=false;
    $(".orangeplay").click(function(){

        $(".orangeplaying").show();
        $(".noneplaying").hide();
        var orangesong = Math.random();

        console.log("feelitstillbefore",feelitstillplaying);
        console.log("animalbefore",animalplaying);
        console.log("ninelivesbefore",ninelivesplaying);


        if (feelitstillplaying==true && orangesong>0.5){
                // ANIMAL
                animalaudio.currentTime = 0;
                feelitstillaudio.pause();
                ninelivesaudio.pause();
                animalaudio.play();
                
                $(".feelitstill").hide();
                $(".ninelives").hide();
                $(".animal").show();
                feelitstillplaying = false;
                animalplaying = true;
                ninelivesplaying = false;
                console.log(1);
        } else if (feelitstillplaying==true && orangesong<=0.5){
                // NINELIVES
                ninelivesaudio.currentTime = 0;
                feelitstillaudio.pause();
                animalaudio.pause();
                ninelivesaudio.play();
                
                $(".feelitstill").hide();
                $(".animal").hide();
                $(".ninelives").show();
                feelitstillplaying = false;
                animalplaying = false;
                ninelivesplaying = true;
                console.log(2);        
        } else if (animalplaying == true && orangesong > 0.5){
                // FEEL IT STILL
                feelitstillaudio.currentTime = 0;
                animalaudio.pause();
                ninelivesaudio.pause();
                feelitstillaudio.play();
                
                $(".animal").hide();
                $(".ninelives").hide();
                $(".feelitstill").show();
                feelitstillplaying = true;
                animalplaying = false;
                ninelivesplaying = false;
                console.log(3);
        } else if (animalplaying == true && orangesong <=0.5){
                // NINE LIVES
                ninelivesaudio.currentTime = 0;
                feelitstillaudio.pause();
                animalaudio.pause();
                ninelivesaudio.play();
                
                $(".feelitstill").hide();
                $(".animal").hide();
                $(".ninelives").show();
                feelitstillplaying = false;
                animalplaying = false;
                ninelivesplaying = true;
                console.log(4);
        } else if (ninelivesplaying == true && orangesong>0.5){
                // FEEL IT STILL
                feelitstillaudio.currentTime = 0;
                animalaudio.pause();
                ninelivesaudio.pause();
                feelitstillaudio.play();
                
                $(".animal").hide();
                $(".ninelives").hide();
                $(".feelitstill").show();
                feelitstillplaying = true;
                animalplaying = false;
                ninelivesplaying = false;
                console.log(5);
        } else if (ninelivesplaying == true && orangesong<=0.5){
                // ANIMAL
                animalaudio.currentTime = 0;
                feelitstillaudio.pause();
                ninelivesaudio.pause();
                animalaudio.play();
                
                $(".ninelives").hide();
                $(".feelitstill").hide();
                $(".animal").show();
                feelitstillplaying = false;
                animalplaying = true;
                ninelivesplaying = false;
                console.log(6);
        } else{
            if (orangesong > 0.666){
                // FEEL IT STILL
                feelitstillaudio.currentTime = 0;
                animalaudio.pause();
                ninelivesaudio.pause();
                feelitstillaudio.play();
                
                $(".animal").hide();
                $(".ninelives").hide();
                $(".feelitstill").show();
                feelitstillplaying = true;
                animalplaying = false;
                ninelivesplaying = false;
                console.log(7);
                
                
            } else if (orangesong >0.333){
                // ANIMAL
                animalaudio.currentTime = 0;
                feelitstillaudio.pause();
                ninelivesaudio.pause();
                animalaudio.play();
                
                $(".ninelives").hide();
                $(".feelitstill").hide();
                $(".animal").show();
                feelitstillplaying = false;
                animalplaying = true;
                ninelivesplaying = false;
                console.log(8);
                
            } else {
                // NINE LIVES
                ninelivesaudio.currentTime = 0;
                feelitstillaudio.pause();
                animalaudio.pause();
                ninelivesaudio.play();
                
                $(".feelitstill").hide();
                $(".animal").hide();
                $(".ninelives").show();
                feelitstillplaying = false;
                animalplaying = false;
                ninelivesplaying = true;
                console.log(9);
                
            }
        
        }
        console.log("feelitstillafter",feelitstillplaying);
        console.log("animalafter",animalplaying);
        console.log("ninelivesafter",ninelivesplaying);
    })

    $(".orangeplay").mouseenter(function(){
        $(".orangeplay").fadeTo(200, 0.5);
    })
    $(".orangeplay").mouseleave(function(){
        $(".orangeplay").fadeTo(200, 1);
    })




  // YELLOW AUDIO PLAYING
    var brightplaying=false;
    var shakeitoffplaying=false;
    var electricloveplaying=false;
   
    $(".yellowplay").click(function(){

        $(".yellowplaying").show();
        $(".noneplaying").hide();
        var yellowsong = Math.random();

        console.log("brightbefore",brightplaying);
        console.log("shakeitoffbefore",shakeitoffplaying);
        console.log("electriclovebefore",electricloveplaying);


        if (brightplaying==true && yellowsong>0.5){
                // SHAKE IT OFF
                shakeitoffaudio.currentTime = 0;
                brightaudio.pause();
                electricloveaudio.pause();
                shakeitoffaudio.play();
                
                $(".electriclove").hide();
                $(".bright").hide();
                $(".shakeitoff").show();
                brightplaying = false;
                shakeitoffplaying = true;
                electricloveplaying = false;
                console.log(1);
        } else if (brightplaying==true && yellowsong<=0.5){
                // ELECTRIC LOVE
                electricloveaudio.currentTime = 0;
                brightaudio.pause();
                shakeitoffaudio.pause();
                electricloveaudio.play();
                
                $(".bright").hide();
                $(".shakeitoff").hide();
                $(".electriclove").show();
                brightplaying = false;
                shakeitoffplaying = false;
                electricloveplaying = true;
                console.log(2);        
        } else if (shakeitoffplaying == true && yellowsong > 0.5){
                // BRIGHT
                brightaudio.currentTime = 0;
                shakeitoffaudio.pause();
                electricloveaudio.pause();
                brightaudio.play();
                
                $(".shakeitoff").hide();
                $(".electriclove").hide();
                $(".bright").show();
                brightplaying = true;
                shakeitoffplaying = false;
                electricloveplaying = false;
                console.log(3);
        } else if (shakeitoffplaying == true && yellowsong <=0.5){
                // ELECTRIC LOVE
                electricloveaudio.currentTime = 0;
                brightaudio.pause();
                shakeitoffaudio.pause();
                electricloveaudio.play();
                
                $(".bright").hide();
                $(".shakeitoff").hide();
                $(".electriclove").show();
                brightplaying = false;
                shakeitoffplaying = false;
                electricloveplaying = true;
                console.log(4);
        } else if (electricloveplaying == true && yellowsong>0.5){
                // BRIGHT
                brightaudio.currentTime = 0;
                shakeitoffaudio.pause();
                electricloveaudio.pause();
                brightaudio.play();
                
                $(".shakeitoff").hide();
                $(".electriclove").hide();
                $(".bright").show();
                brightplaying = true;
                shakeitoffplaying = false;
                electricloveplaying = false;
                console.log(5);
        } else if (electricloveplaying == true && yellowsong<=0.5){
                // SHAKE IT OFF
                shakeitoffaudio.currentTime = 0;
                brightaudio.pause();
                electricloveaudio.pause();
                shakeitoffaudio.play();
                
                $(".electriclove").hide();
                $(".bright").hide();
                $(".shakeitoff").show();
                brightplaying = false;
                shakeitoffplaying = true;
                electricloveplaying = false;
                console.log(6);
        } else{
            if (yellowsong > 0.666){
                // BRIGHT
                brightaudio.currentTime = 0;
                shakeitoffaudio.pause();
                electricloveaudio.pause();
                brightaudio.play();
                
                $(".shakeitoff").hide();
                $(".electriclove").hide();
                $(".bright").show();
                brightplaying = true;
                shakeitoffplaying = false;
                electricloveplaying = false;
                console.log(7);
                
                
            } else if (yellowsong >0.333){
                // SHAKE IT OFF
                shakeitoffaudio.currentTime = 0;
                brightaudio.pause();
                electricloveaudio.pause();
                shakeitoffaudio.play();
                
                $(".electriclove").hide();
                $(".bright").hide();
                $(".shakeitoff").show();
                brightplaying = false;
                shakeitoffplaying = true;
                electricloveplaying = false;
                console.log(8);
                
            } else {
                // ELECTRIC LOVE
                electricloveaudio.currentTime = 0;
                brightaudio.pause();
                shakeitoffaudio.pause();
                electricloveaudio.play();
                
                $(".bright").hide();
                $(".shakeitoff").hide();
                $(".electriclove").show();
                brightplaying = false;
                shakeitoffplaying = false;
                electricloveplaying = true;
                console.log(9);
                
            }
        
        }
        console.log("brightafter",brightplaying);
        console.log("shakeitoffafter",shakeitoffplaying);
        console.log("electricloveafter",electricloveplaying);
    })

    $(".yellowplay").mouseenter(function(){
        $(".yellowplay").fadeTo(200, 0.5);
    })
    $(".yellowplay").mouseleave(function(){
        $(".yellowplay").fadeTo(200, 1);
    })




    // GREEN AUDIO PLAYING
    var openyourmindplaying=false;
    var lostinjapanplaying=false;
    var saysoplaying=false;
   
    $(".greenplay").click(function(){

        $(".greenplaying").show();
        $(".noneplaying").hide();
        var greensong = Math.random();

        console.log("openyourmindbefore",openyourmindplaying);
        console.log("lostinjapanbefore",lostinjapanplaying);
        console.log("saysobefore",saysoplaying);


        if (openyourmindplaying==true && greensong>0.5){
                // LOST IN JAPAN
                lostinjapanaudio.currentTime = 0;
                openyourmindaudio.pause();
                saysoaudio.pause();
                lostinjapanaudio.play();
                
                $(".sayso").hide();
                $(".openyourmind").hide();
                $(".lostinjapan").show();
                openyourmindplaying = false;
                lostinjapanplaying = true;
                saysoplaying = false;
                console.log(1);
        } else if (openyourmindplaying==true && greensong<=0.5){
                // SAY SO
                saysoaudio.currentTime = 0;
                openyourmindaudio.pause();
                lostinjapanaudio.pause();
                saysoaudio.play();
                
                $(".openyourmind").hide();
                $(".lostinjapan").hide();
                $(".sayso").show();
                openyourmindplaying = false;
                lostinjapanplaying = false;
                saysoplaying = true;
                console.log(2);        
        } else if (lostinjapanplaying == true && greensong > 0.5){
                // OPEN YOUR MIND
                openyourmindaudio.currentTime = 0;
                lostinjapanaudio.pause();
                saysoaudio.pause();
                openyourmindaudio.play();
                
                $(".lostinjapan").hide();
                $(".sayso").hide();
                $(".openyourmind").show();
                openyourmindplaying = true;
                lostinjapanplaying = false;
                saysoplaying = false;
                console.log(3);
        } else if (lostinjapanplaying == true && greensong <=0.5){
                // SAY SO
                saysoaudio.currentTime = 0;
                openyourmindaudio.pause();
                lostinjapanaudio.pause();
                saysoaudio.play();
                
                $(".openyourmind").hide();
                $(".lostinjapan").hide();
                $(".sayso").show();
                openyourmindplaying = false;
                lostinjapanplaying = false;
                saysoplaying = true;
                console.log(4);
        } else if (saysoplaying == true && greensong>0.5){
                // OPEN YOUR MIND
                openyourmindaudio.currentTime = 0;
                lostinjapanaudio.pause();
                saysoaudio.pause();
                openyourmindaudio.play();
                
                $(".lostinjapan").hide();
                $(".sayso").hide();
                $(".openyourmind").show();
                openyourmindplaying = true;
                lostinjapanplaying = false;
                saysoplaying = false;
                console.log(5);
        } else if (saysoplaying == true && greensong<=0.5){
                // LOST IN JAPAN
                lostinjapanaudio.currentTime = 0;
                openyourmindaudio.pause();
                saysoaudio.pause();
                lostinjapanaudio.play();
                
                $(".sayso").hide();
                $(".openyourmind").hide();
                $(".lostinjapan").show();
                openyourmindplaying = false;
                lostinjapanplaying = true;
                saysoplaying = false;
                console.log(6);
        } else{
            if (greensong > 0.666){
                // OPEN YOUR MIND
                openyourmindaudio.currentTime = 0;
                lostinjapanaudio.pause();
                saysoaudio.pause();
                openyourmindaudio.play();
                
                $(".lostinjapan").hide();
                $(".sayso").hide();
                $(".openyourmind").show();
                openyourmindplaying = true;
                lostinjapanplaying = false;
                saysoplaying = false;
                console.log(7);
                
                
            } else if (greensong >0.333){
                // LOST IN JAPAN
                lostinjapanaudio.currentTime = 0;
                openyourmindaudio.pause();
                saysoaudio.pause();
                lostinjapanaudio.play();
                
                $(".sayso").hide();
                $(".openyourmind").hide();
                $(".lostinjapan").show();
                openyourmindplaying = false;
                lostinjapanplaying = true;
                saysoplaying = false;
                console.log(8);
                
            } else {
                // SAY SO
                saysoaudio.currentTime = 0;
                openyourmindaudio.pause();
                lostinjapanaudio.pause();
                saysoaudio.play();
                
                $(".openyourmind").hide();
                $(".lostinjapan").hide();
                $(".sayso").show();
                openyourmindplaying = false;
                lostinjapanplaying = false;
                saysoplaying = true;
                console.log(9);
                
            }
        
        }
        console.log("openyourmindafter",openyourmindplaying);
        console.log("lostinjapanafter",lostinjapanplaying);
        console.log("saysoafter",saysoplaying);
    })

    $(".greenplay").mouseenter(function(){
        $(".greenplay").fadeTo(200, 0.5);
    })
    $(".greenplay").mouseleave(function(){
        $(".greenplay").fadeTo(200, 1);
    })



    // BLUE AUDIO PLAYING
    var bitchesbrokenheartsplaying=false;
    var bestpartplaying=false;
    var maydayplaying=false;
   
    $(".blueplay").click(function(){

        $(".blueplaying").show();
        $(".noneplaying").hide();
        var bluesong = Math.random();

        console.log("bitchesbrokenheartsbefore",bitchesbrokenheartsplaying);
        console.log("bestpartbefore",bestpartplaying);
        console.log("maydaybefore",maydayplaying);


        if (bitchesbrokenheartsplaying==true && bluesong>0.5){
                // BEST PART
                bestpartaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                maydayaudio.pause();
                bestpartaudio.play();
                
                $(".mayday").hide();
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = true;
                maydayplaying = false;
                console.log(1);
        } else if (bitchesbrokenheartsplaying==true && bluesong<=0.5){
                // MAYDAY
                maydayaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                bestpartaudio.pause();
                maydayaudio.play();
                
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").hide();
                $(".mayday").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = false;
                maydayplaying = true;
                console.log(2);        
        } else if (bestpartplaying == true && bluesong > 0.5){
                // BITCHES BROKEN HEARTS
                bitchesbrokenheartsaudio.currentTime = 0;
                bestpartaudio.pause();
                maydayaudio.pause();
                bitchesbrokenheartsaudio.play();
                
                $(".bestpart").hide();
                $(".mayday").hide();
                $(".bitchesbrokenhearts").show();
                bitchesbrokenheartsplaying = true;
                bestpartplaying = false;
                maydayplaying = false;
                console.log(3);
        } else if (bestpartplaying == true && bluesong <=0.5){
                // MAYDAY
                maydayaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                bestpartaudio.pause();
                maydayaudio.play();
                
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").hide();
                $(".mayday").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = false;
                maydayplaying = true;
                console.log(4);
        } else if (maydayplaying == true && bluesong>0.5){
                // BITCHES BROKEN HEARTS
                bitchesbrokenheartsaudio.currentTime = 0;
                bestpartaudio.pause();
                maydayaudio.pause();
                bitchesbrokenheartsaudio.play();
                
                $(".bestpart").hide();
                $(".mayday").hide();
                $(".bitchesbrokenhearts").show();
                bitchesbrokenheartsplaying = true;
                bestpartplaying = false;
                maydayplaying = false;
                console.log(5);
        } else if (maydayplaying == true && bluesong<=0.5){
                // BEST PART
                bestpartaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                maydayaudio.pause();
                bestpartaudio.play();
                
                $(".mayday").hide();
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = true;
                maydayplaying = false;
                console.log(6);
        } else{
            if (bluesong > 0.666){
                // BITCHES BROKEN HEARTS
                bitchesbrokenheartsaudio.currentTime = 0;
                bestpartaudio.pause();
                maydayaudio.pause();
                bitchesbrokenheartsaudio.play();
                
                $(".bestpart").hide();
                $(".mayday").hide();
                $(".bitchesbrokenhearts").show();
                bitchesbrokenheartsplaying = true;
                bestpartplaying = false;
                maydayplaying = false;
                console.log(7);
                
                
            } else if (bluesong >0.333){
                // BEST PART
                bestpartaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                maydayaudio.pause();
                bestpartaudio.play();
                
                $(".mayday").hide();
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = true;
                maydayplaying = false;
                console.log(8);
                
            } else {
                // MAYDAY
                maydayaudio.currentTime = 0;
                bitchesbrokenheartsaudio.pause();
                bestpartaudio.pause();
                maydayaudio.play();
                
                $(".bitchesbrokenhearts").hide();
                $(".bestpart").hide();
                $(".mayday").show();
                bitchesbrokenheartsplaying = false;
                bestpartplaying = false;
                maydayplaying = true;
                console.log(9);
                
            }
        
        }
        console.log("bitchesbrokenheartsafter",bitchesbrokenheartsplaying);
        console.log("bestpartafter",bestpartplaying);
        console.log("maydayafter",maydayplaying);
    })

    $(".blueplay").mouseenter(function(){
        $(".blueplay").fadeTo(200, 0.5);
    })
    $(".blueplay").mouseleave(function(){
        $(".blueplay").fadeTo(200, 1);
    })





     // PURPLE AUDIO PLAYING
     var undertaleplaying=false;
     var royalsplaying=false;
     var unravelplaying=false;
    
     $(".purpleplay").click(function(){
 
         $(".purpleplaying").show();
         $(".noneplaying").hide();
         var purplesong = Math.random();
 
         console.log("undertalebefore",undertaleplaying);
         console.log("royalsbefore",royalsplaying);
         console.log("unravelbefore",unravelplaying);
 
 
         if (undertaleplaying==true && purplesong>0.5){
                 // ROYALS
                 royalsaudio.currentTime = 0;
                 undertaleaudio.pause();
                 unravelaudio.pause();
                 royalsaudio.play();
                 
                 $(".unravel").hide();
                 $(".undertale").hide();
                 $(".royals").show();
                 undertaleplaying = false;
                 royalsplaying = true;
                 unravelplaying = false;
                 console.log(1);
         } else if (undertaleplaying==true && purplesong<=0.5){
                 // UNRAVEL
                 unravelaudio.currentTime = 0;
                 undertaleaudio.pause();
                 royalsaudio.pause();
                 unravelaudio.play();
                 
                 $(".undertale").hide();
                 $(".royals").hide();
                 $(".unravel").show();
                 undertaleplaying = false;
                 royalsplaying = false;
                 unravelplaying = true;
                 console.log(2);        
         } else if (royalsplaying == true && purplesong > 0.5){
                 // IT'S RAINING SOMEWHERE ELSE
                 undertaleaudio.currentTime = 0;
                 royalsaudio.pause();
                 unravelaudio.pause();
                 undertaleaudio.play();
                 
                 $(".royals").hide();
                 $(".unravel").hide();
                 $(".undertale").show();
                 undertaleplaying = true;
                 royalsplaying = false;
                 unravelplaying = false;
                 console.log(3);
         } else if (royalsplaying == true && purplesong <=0.5){
                 // UNRAVEL
                 unravelaudio.currentTime = 0;
                 undertaleaudio.pause();
                 royalsaudio.pause();
                 unravelaudio.play();
                 
                 $(".undertale").hide();
                 $(".royals").hide();
                 $(".unravel").show();
                 undertaleplaying = false;
                 royalsplaying = false;
                 unravelplaying = true;
                 console.log(4);
         } else if (unravelplaying == true && purplesong>0.5){
                 // IT'S RAINING SOMEWHERE ELSE
                 undertaleaudio.currentTime = 0;
                 royalsaudio.pause();
                 unravelaudio.pause();
                 undertaleaudio.play();
                 
                 $(".royals").hide();
                 $(".unravel").hide();
                 $(".undertale").show();
                 undertaleplaying = true;
                 royalsplaying = false;
                 unravelplaying = false;
                 console.log(5);
         } else if (unravelplaying == true && purplesong<=0.5){
                 // ROYALS
                 royalsaudio.currentTime = 0;
                 undertaleaudio.pause();
                 unravelaudio.pause();
                 royalsaudio.play();
                 
                 $(".unravel").hide();
                 $(".undertale").hide();
                 $(".royals").show();
                 undertaleplaying = false;
                 royalsplaying = true;
                 unravelplaying = false;
                 console.log(6);
         } else{
             if (purplesong > 0.666){
                 // IT'S RAINING SOMEWHERE ELSE
                 undertaleaudio.currentTime = 0;
                 royalsaudio.pause();
                 unravelaudio.pause();
                 undertaleaudio.play();
                 
                 $(".royals").hide();
                 $(".unravel").hide();
                 $(".undertale").show();
                 undertaleplaying = true;
                 royalsplaying = false;
                 unravelplaying = false;
                 console.log(7);
                 
                 
             } else if (purplesong >0.333){
                 // ROYALS
                 royalsaudio.currentTime = 0;
                 undertaleaudio.pause();
                 unravelaudio.pause();
                 royalsaudio.play();
                 
                 $(".unravel").hide();
                 $(".undertale").hide();
                 $(".royals").show();
                 undertaleplaying = false;
                 royalsplaying = true;
                 unravelplaying = false;
                 console.log(8);
                 
             } else {
                 // UNRAVEL
                 unravelaudio.currentTime = 0;
                 undertaleaudio.pause();
                 royalsaudio.pause();
                 unravelaudio.play();
                 
                 $(".undertale").hide();
                 $(".royals").hide();
                 $(".unravel").show();
                 undertaleplaying = false;
                 royalsplaying = false;
                 unravelplaying = true;
                 console.log(9);
                 
             }
         
         }
         console.log("undertaleafter",undertaleplaying);
         console.log("royalsafter",royalsplaying);
         console.log("unravelafter",unravelplaying);
     })

     $(".purpleplay").mouseenter(function(){
        $(".purpleplay").fadeTo(200, 0.5);
    })
    $(".purpleplay").mouseleave(function(){
        $(".purpleplay").fadeTo(200, 1);
    })




    $("#randomcolorbutton").click(function(){
        allmute();
        hidecolorplaying();
        var pagenumber = Math.random();
        if (pagenumber > 0.835){
            redpage();
        } else if (pagenumber > 0.668){
            orangepage();
        } else if (pagenumber > 0.501){
            yellowpage();
        } else if (pagenumber > 0.333){
            greenpage();
        } else if (pagenumber > 0.167){
            bluepage();
        } else {
            purplepage();
        }
        
        console.log(pagenumber);
    })
})