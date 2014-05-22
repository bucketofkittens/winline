

id_("CUPON").innerHTML='<div style="width:235px;float:left;margin-top:0px;background:url(/resources/images/cupon333.png?7) no-repeat;position:relative;"><div style="height:34px;"><div style="width:195px;float:left; margin-left:10px;height:24px;margin-top:10px; color:#FFFFFF;"><span style="float:left;width:90px;font-size:13px;font-weight:bold;cursor:pointer;" onclick="xlopus2(5,0);">МОИ СТАВКИ</span><span id="MSH" style="float:left;font-size:12px;color:#FFFFFF;text-align:right;width:85px;text-decoration:underline;cursor:pointer;" onclick="cuponclick();"></span></div><img name="xlop" style="float:right;margin-right:10px;margin-top:10px;cursor:pointer;" src="/resources/images/down5.png?7"/></div><div style="width:100%;"><div style="float:left;"><div style="width:235px;float:left;border-top:1px solid #FFFFFF;"><div style="width:235px;float:left;height:26px;margin-top:0px;"><div id="CUPONBALANCE" style="width:209px;float:left;margin-top:5px;height:15px;margin-left:10px;font-size:12px;color:#FFFFFF;"><span style="float:left;"></span><div id="popolniti" onclick="newreg5();" style="float:right;cursor:pointer;text-decoration:underline;"></div></div></div><div style="width:235px;float:left;height:33px;margin-top:0px;"><div id="Ordinar0" style="width:67px;float:left;margin-top:5px;height:20px; margin-left:9px; background:url(/resources/images/cupon11.png?7) no-repeat; font-size:11px;color:#B7B7B7;text-align:center;padding-top:4px;cursor:pointer;" onclick="ordinarclick();"onmouseover="if(expressflag!=0) {this.style.background=&quot;url(/resources/images/cupon1111.png?7) no-repeat&quot;;this.style.color=&quot;#000000&quot;;}" onmouseout="if(expressflag!=0){this.style.background=&quot;url(/resources/images/cupon11.png?7) no-repeat&quot;;this.style.color=&quot;#B7B7B7&quot;;}">Ординар</div><div id="Express0" style="width:67px;float:left;margin-top:5px;height:20px; margin-left:8px; background:url(/resources/images/cupon11.png?7) no-repeat; font-size:11px;color:#B7B7B7;text-align:center;padding-top:4px;cursor:pointer;" onclick="expressclick();"onmouseover="if(expressflag!=1) {this.style.background=&quot;url(/resources/images/cupon1111.png?7) no-repeat&quot;;this.style.color=&quot;#000000&quot;;}" onmouseout="if(expressflag!=1){this.style.background=&quot;url(/resources/images/cupon11.png?7) no-repeat&quot;;this.style.color=&quot;#B7B7B7&quot;;}";>Экспресс</div><div id="System0" style="width:67px;float:left;margin-top:5px;height:20px; margin-left:8px; background:url(/resources/images/cupon11.png?7) no-repeat; font-size:11px;color:#B7B7B7;text-align:center;padding-top:4px;cursor:pointer;" onclick="systemclick();"onmouseover="if(expressflag!=2) {this.style.background=&quot;url(/resources/images/cupon1111.png?7) no-repeat&quot;;this.style.color=&quot;#000000&quot;;}" onmouseout="if(expressflag!=2){this.style.background=&quot;url(/resources/images/cupon11.png?7) no-repeat&quot;;this.style.color=&quot;#B7B7B7&quot;;}";>Система</div></div></div><div  style="width:235px;float:left;background-color:#FFFFFF;height:5px;margin-top:0px;"></div><div id="CUPONBET" style="width:235px;float:left;margin-top:-33px;overflow-y:auto;overflow-x:hidden;position:relative;z-index:1;background-color:#FFFFFF;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"><div style="width:235px;float:left; background-color:#FFFFFF;height:48px; padding-top:16px; text-align:center; font-size:12px;color:#000000;">Вы не авторизированы</div></div><div style="width:235px;float:left;height:0px;background-color:#FFFFFF;display:none;"></div><div id="ORDINAR" style="width:235px;float:left;margin-top:0px;background-color:#FFFFFF;min-height:30px;"></div><div id="EXPRESS" style="width:235px;float:left;margin-top:0px;background-color:#FFFFFF;min-height:5px"></div><div id="SYSTEM" style="width:235px;float:left;margin-top:0px;background-color:#FFFFFF;height:0px;"></div><div id="ORDINARL"  style="width:235px;float:left;background-color:#FFFFFF;height:1px;margin-top:-1px;"></div><div id="CUPONSTAKE" style="width:235px;float:left;background-color:#FFFFFF;display:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"><div id="Expor1" style="width:235px;margin-left:0px;float:left;font-size:11px;margin-top:7px;background-color:#ECECEC;padding-top:5px; padding-bottom:5px;"><span style="float:left;width:127px;margin-left:10px;font-size:12px;">Общий коэффициент</span><div id="Express2" style="float:left;font-size:12px;width:90px;text-align:right; font-weight:bold;"></div></div><div id="SYSTO1" style="width:221px;margin-left:7px;float:left;font-size:11px;margin-top:8px;background-color:#ECECEC;"><select id="SOHO2" onchange="calckoef(0);" style="position:relative;float:right;margin-right:3px; width:215px;color:#656565;border:1px solid #7E7E7E;background-color:#ECECEC;font-size:12px;"></select></div><div id="CUPONSUMMA" style="width:80px;float:left;font-size:12px; font-weight:bold; margin-left:10px; margin-top:10px;">Сумма RUR</div><input type="text" id="SUMMAINPUT" maxlength="12" class="open4" style="font-size:12px;font-weight:bold;width:125px;margin-top:7px;text-align:right;" onKeyUp="summ2change();" onKeyPress="return summapress2(event,1);" onfocusout="sfocus=0;" onfocusin="sfocus=1;"/><div id="NEWORDINAR" style="width:100%;margin-top:8px;float:left;margin-bottom:-1px;"><div style="width:100%;height:21px;background-color:#EB6F24;float:left;"><div style="float:left;margin-left:10px;font-size:12px;color:#fff;font-weight:bold;margin-top:3px;width:101px;">Ставок:</div><div style="float:right;margin-right:15px;font-size:12px;color:#fff;margin-top:3px;font-weight:bold;">Сумма:</div></div></div><div style="width:130px;float:left;font-size:11px;margin-left:10px; margin-top:5px; background-color:#FFFFFF;"><span id="VIPLATA" style="width:130px;float:left;padding-left:4px;margin-top:1px;padding-top:2px;border-top:0px solid #C1C1C1;">Выплата</span><span id="OTKAT" style="width:130px;float:left;padding-left:4px;margin-top:1px;padding-top:2px;border-top:1px solid #F47621;border-bottom:1px solid #F47621;background-color:#F47621;font-weight:bold;display:none;color:#FFF;height:16px;margin-bottom:-2px;position:relative;z-index:2;">Бонус «Откатим»</span><span id="MINIMUM" style="width:130px;float:left;padding-left:4px;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;position:relative;z-index:1;display:none;">Минимум</span><span id="MINIMUM2" style="width:130px;float:left;padding-left:4px;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;display:none;height:1px;"></span><span id="MAXIMUM" style="width:130px;float:left;position:relative;z-index:1;padding-left:4px;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;border-bottom:1px solid #C1C1C1;display:none;">Максимум</span><span id="MAXIMUM2" style="width:130px;float:left;position:relative;z-index:1;padding-left:4px;margin-top:1px;padding-top:2px;border-top:1px solid #FFF;border-bottom:1px solid #C1C1C1;display:none;">&nbsp;</span></div><div style="width:80px;float:left;font-size:11px;margin-top:5px;text-align:right;"><span id="Summ4" style="width:80px;float:left;margin-top:1px;padding-top:2px;border-top:0px solid #C1C1C1;display:none;">0</span><span id="Summ44" style="width:80px;float:left;margin-top:1px;padding-top:2px;border-top:0px solid #C1C1C1;">0</span><span id="Summ7" style="width:79px;float:left;position:relative;z-index:2;margin-top:1px;margin-bottom:-2px;height:16px;padding-top:2px;padding-right:3px;border:1px solid #F47621;color:#E97323;font-weight:bold;display:none;">0</span><span id="Summ5" style="width:80px;float:left;position:relative;z-index:1;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;display:none;">0</span><span id="Summ55" style="width:80px;float:left;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;display:none;height:2px;"></span><span id="Summ6" style="width:80px;float:left;position:relative;z-index:1;margin-top:1px;padding-top:2px;border-top:1px solid #C1C1C1;border-bottom:1px solid #C1C1C1;display:none;">0</span><span id="Summ66" style="width:80px;float:left;margin-top:1px;position:relative;z-index:1;padding-top:2px;border-top:1px solid #FFF;border-bottom:1px solid #C1C1C1;display:none;">&nbsp;</span></div><div style="width:215px;float:left;font-size:10px;padding-top:0px;margin-top:0px;height:14px;margin-bottom:10px;color:#656565;padding-left:10px;padding-right:10px;border-top:0px solid #C1C1C1;background-color:#FFF;"></div><div id="CUPONSLIDE" style="width:215px;float:left;margin-top:10px;height:45px;margin-left:10px;overflow:hidden;display:none;"><div style="width:430px;float:left;margin-top:10px;margin-left:-215px;"><div style="width:215px;float:left;background-color:#000000;height:6px;"></div><div style="width:215px;float:left;"><span style="float:left;background-color:#C7C8CA;width:215px;height:6px;margin-top:0px;"><span style="float:left;margin-top:1px;background-color:#D5D6D7;width:215px;height:2px;"></span></span><img src="/resources/images/balon.png?7" style="float:left;margin-top:-11px;"/></div></div></div><input type="image" style="outline:none;float:left;position:relative; margin-left:7px; margin-top:-9px;cursor:pointer;" src="/resources/images/cupon88.png?7" onclick="delstavca();"/><div style="width:75px;float:left;font-size:11px;margin-top:-10px;margin-left:5px;color:#000;cursor:pointer;" onclick="delstavca();">Удалить все</div><div style="float:left;font-size:12px;font-weight:bold;margin-top:-20px;margin-bottom:8px;width:121px;padding-top:6px;height:24px;background-image:url(/resources/images/express1.png?7);margin-left:5px;color:#FFFFFF;display:none;"><span style="margin-left:10px;">Принять ставку</span></div><div id="STAVCABUTTON" onclick="if(sendstate+grandsendstate==0){mExpressState=0;ordinarflag=1;sendstavca();}"><span style="margin-left:10px;">Принять ставку</span></div><div style="width:215px;float:left;font-size:10px;padding-top:5px;margin-top:0px;margin-bottom:0px;color:#656565;padding-left:10px;padding-right:10px;border-top:1px solid #C1C1C1;background-color:#EBEBEB;display:none;"><span style="width:215px;float:left;">Начни играть на реальном счете</span><div id="OPBUTTON5" onclick="window.location.hash=&quot;#registration&quot;;"><span style="margin-left:10px;">Реальная игра</span></div></div><div style="width:100%;float:left;height:63px;background-color:#EBEBEB;;border-top:1px solid #C1C1C1;position:relative;z-index:3;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"><input type="checkbox"  value="checkbox" id="CHECKBET" style="float:left; margin-left:10px; margin-top:10px;"/><div style="width:195px; margin-left:10px;float:left;font-size:12px;color:#000; margin-top:9px;">Принять ставку с любым коэфф.</div><span style="float:left;height:1px;margin-left:10px;width:210px;background-color:#c1c1c1;margin-top:5px;"></span><div style="width:0px;height:0px;float:left;margin-left:-220px;"><div style="width:235px;height:190px;background-image:url(/resources/images/rapidbet.png?7);margin-top:-175px;display:none;" id="RAPIDPOP"><div style="width:17px;height:17px;float:right;margin-right:25px;margin-top:8px;cursor:pointer;position:relative;z-index:1;" onclick="this.parentNode.style.display=&quot;none&quot;"><input type="image" style="outline:none;float:left; margin-left:5px;margin-top:2px;" src="/resources/images/cupon88.png?7"/></div><div style="font-size:11px;color#000;width:200px;margin-left:19px;margin-bottom:1px;margin-top:-10px;float:left;position:relative;z-index:0;">Отмечая быструю ставку Вы соглашаетесь автоматически принимать ставку при нажатии на коэффициент с выбранной Вами суммой.</div><span style="font-size:11px;font-weight:bold;color:#000;float:left;margin-left:20px;float:left;margin-top:2px;width:82px;">Сумма ставки:</span><select class="ord111" onchange="sm11change();"></select><span><input class="ord555" onkeyup="sm55change();" onkeypress="return summapress2(event,4);" onfocusout=";" value="100" style="background-color:#FFF;"></span><div id="RAPIDN" onclick="setcheckrapid(1);">Отменить</div><div id="RAPIDY" onclick="setcheckrapid(0);">Принять</div><a href="/pomosch/pravila/" style="float:right;margin-right:25px;margin-top:4px;font-size:11px;text-decoration:underline;color:#000;">Правила приема ставок</a></div></div><input type="checkbox" id="CHECKRAPID" value="checkbox"  style="float:left; margin-left:10px;margin-top:6px;" onclick="rapidbetclick(0)"/><div style="width:105px; margin-left:8px;float:left;font-size:12px;margin-top:5px;color:#0000EE;font-weight:bold;text-decoration:underline;cursor:pointer;" onclick="rapidbetclick(1)";>Быстрая ставка</div><select class="ord11" onchange="" disabled="disabled"><option>300</option><option>500</option><option>1000</option><option>5000</option><option>10000</option></select><span><input class="ord55" onkeydown="return false;" onkeyup="return false;" onkeypress="return false;" onfocusout=";" value="100"/></span></div></div></div><div id="freebetbottom" style="width:100%;height:41px;float:left;position:relative;z:-index:0;background-color:#36a903;margin-top:-10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:none;"><div style="width:100%;text-align:center;color:#fff;font-size:12px;cursor:pointer;font-weight:bold;text-decoration:underline;margin-top:17px;" onclick="showWarningFree();">Ваша бесплатная ставка</div></div></div><div style="position:relative;float:left;width:235px;font-size:12px;color:#000000;margin-left:0px;"><div style="position:relative;float:left;width:235px;background-color:#000000;height:108px;;margin-top:13px;display:none;"><div class="corn_lt"></div><div class="corn_rt"></div><div id="LEFT1" style="background:url(/resources/images/b2001r.png?7) no-repeat;float:left;margin-left:2px;margin-top:10px;cursor:pointer;width:219px;height:89px;" onclick="window.location.hash=&quot;bonus2000&quot;;"></div><span style="float:left;width:87px;margin-left:124px;height:15px;margin-top:-57px;text-align:center;"></span><span style="float:left;width:87px;margin-left:124px;height:15px;margin-top:-25px;text-align:center;"></span></div></div>';

id_("OPENSEO").innerHTML= '<div style="width:235px;float:left;margin-top:0px;background:url(/resources/images/cupon33.png?7) no-repeat;"><div style="width:185px;float:left; margin-left:15px;height:25px;margin-top:10px; color:#FFFFFF;" onclick=""><span style="float:left;font-size:13px;width:80px;font-weight:bold;cursor:pointer;" onclick="xlopus2(4,0)";>МОЙ СЧЕТ</span><span id="MSH2" style="float:left;font-size:12px;color:#FFFFFF;text-align:right;width:102px;text-decoration:underline;" onclick="newreg5();"></span></div><div style="width:235px;float:left;height:26px;margin-top:0px;background-color:#FFFFFF;display:none;"><div id="CUPONBALANCE1" style="width:220px;float:left;margin-top:5px;height:15px;margin-left:15px;font-size:12px;color:#FF6707;"></div></div><img name="xlop" style="float:right;margin-right:10px;margin-top:10px;cursor:pointer;" src="/resources/images/down5.png?7"/></div><div style="width:100%;float:left;"><div style="float:left;width:100%;"><div id="OPLOGIN" style="width:235px;float:left;margin-top:0px;background-color:#FFFFFF;position:relative;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"><div style="width:152px;float:left;"><div class="open3" style="margin-top:20px;width:51px;">Логин:</div><input type="text" class="open4" style="margin-top:18px;width:80px;" onKeyPress="loginpres2(event);"/><div class="open3" style="width:51px;">Пароль:</div><input type="password" style="width:80px;" class="open4" onKeyPress="loginpres2(event);"/></div><div style="width:75px;float:left;font-size:11px; margin-top:23px;"><span style="color:#656565;float:right;margin-right:2px;">Запомнить</span><input type="checkbox"  value="checkbox" id="CHECKLOGIN2" checked="checked" onclick="ckl2();" style="float:right; margin-right:3px; margin-top:0px;"/><div id="OPENBUTTON1" onclick="loginclick2();">Вход</div></div><a href="/auth/remember1" style="color:#656565;float:right;margin-right:9px;font-size:11px;text-decoration:underline;">Забыли пароль?</a><div style="width:200px;float:left;font-size:12px;color:#000000;margin-left:15px;margin-top:4px;cursor:pointer;"onclick="newreg();">Первый раз на сайте?</div><div id="OPENBUTTON2" onclick="newreg();"><span style="margin-left:10px;">Открыть счет</span></div><div style="width:235px;float:left;background-color:#EBEBEB;margin-top:14px;height:56px;border-top:1px solid #C1C1C1;"><div style="width:210px;float:left;font-size:11px;color:#656565;margin-left:15px;margin-top:9px;">Вы можете попробовать свои силы и сыграть на виртуальном счете</div></div><div id="OPENBUTTON3" onclick="newreg4();"><span style="margin-left:10px;">Виртуальная игра</span></div></div><div id="HIDE2" style="position:absolute;float:none;margin-top:100px;width:235px;display:none;"><div style="position:absolute;float:none;margin-top:0px;width:225px;margin-left:5px;background-color:#000000;opacity:0.7;color:#FFFFFF"><img src="/resources/images/11111.png?7" style="float:left; margin-left:200px;margin-top:7px;cursor:pointer;" onclick="id_(&quot;HIDE2&quot;).style.display=&quot;none&quot;;" title="Закрыть"/><span style="float:left;width:210px;margin-left:13px;margin-bottom:15px;"></span></div></div></div></div>';

id_("noindex").innerHTML= '<audio id="sound3" src="/resources/sounds/sound3.mp3"></audio><audio id="sound4" src="/resources/sounds/sound4.mp3"></audio><audio id="sound5" src="/resources/sounds/sound5.mp3"></audio><div id="REGISTER" style="position:relative;float:left;width:743px;display:none;"><img src="/resources/images/reg.jpg?9" style="margin-bottom:-3px;margin-left:1px;"/><div style="float:left;width:743px;"><div style="position:relative;float:left;width:495px;height:825px;border-bottom-left-radius:10px;overflow:hidden;background-color:#FFF;"><div style="float:left;width:100%;margin-top:8px;padding-left:25px;font-size:14px;font-weight:bold;background-image:url(/resources/images/os4.png);height:23px;padding-top:7px;">Откройте счет сейчас, и Ваша <a href="/novosti/92.html" style="text-decoration:underline;color:#000;">первая ставка</a> не проиграет!</div><div style="position:relative;float:left;width:488px;margin-left:7px;line-height:16px;"><div class="reg3" style="margin-top:20px;">Фамилия:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span></div><input type="text" class="reg4" style="margin-top:19px;"/><span class="reg5"></span><div class="reg3">Имя:<br/><span style="color:#656565;font-size:11px;">как в паспорте</span></div><input type="text" class="reg4"/><span class="reg5"></span><div class="reg3">Дата рождения:</div><select onblur="regdata1();" onfocus="regdata1();" class="reg4" style="line-height:17px;width:88px;height:20px;"><option>-</option></select><select onblur="regdata2();" onfocus="regdata2();"class="reg4" style="line-height:17px;height:20px;width:88px;margin-left:5px;"><option>-</option></select><select onblur="regdata3();" onfocus="regdata3();" class="reg4" style="line-height:17px;height:20px;width:88px;margin-left:5px;"><option>-</option></select><span class="reg5"></span><div class="reg3">Страна проживания:</div><select onchange="codecountry();" class="reg4" style="line-height:17px;height:20px;width:274px;"></select><span class="reg5"></span><div class="reg3">Мобильный телефон:</div><div style="width:0px;height:0px;float:left;margin-left:0px;margin-top:11px;position:relative;z-index:1;"><div style="font-size:11px;color:#000;padding-left:3px;" id="codcount"></div></div><input type="text" class="reg4" style="position:relative;z-index:0;" onKeyPress="return telpress(event);"/><span class="reg5"></span><div class="reg3">Адрес электронной почты:</div><input type="text" class="reg4" onKeyPress="return mailpress(event);" onKeyDown="return mailpress2(event);" onContextMenu="return false;" onfocusout="id_(&quot;regmailw&quot;).style.display=&quot;none&quot;" onfocusin="id_(&quot;regmailw&quot;).style.display=&quot;&quot;;" onblur="id_(&quot;regmailw&quot;).style.display=&quot;none&quot;" onfocus="id_(&quot;regmailw&quot;).style.display=&quot;&quot;;"/><span class="reg5"></span><div class="reg3">Повторите адрес эл. почты:</div><input type="text" class="reg4" onKeyPress="return mailpress(event);" onContextMenu="return false;" onKeyDown="return mailpress2(event);" onfocusout="id_(&quot;regmailw&quot;).style.display=&quot;none&quot;" onfocusin="id_(&quot;regmailw&quot;).style.display=&quot;&quot;;" onblur="id_(&quot;regmailw&quot;).style.display=&quot;none&quot;" onfocus="id_(&quot;regmailw&quot;).style.display=&quot;&quot;;"/><span class="reg5"></span><div class="reg3">Пароль:<br/><span style="color:#656565;font-size:11px;">не менее 6 символов</span></div><input type="password" class="reg4"/><span class="reg5"></span><div class="reg3">Повторите пароль:</div><input type="password" class="reg4"/><span class="reg5"></span><div class="reg3">Валюта счета:</div><select class="reg4" style="line-height:17px;height:20px;width:126px;"></select><span class="reg5"></span><div class="reg3">Контрольный вопрос:</div><select class="reg4" style="line-height:17px;height:20px;width:272px;"></select><span class="reg5"></span><div class="reg3">Ответ:</div><input type="text" class="reg4"/><span class="reg5"></span><div class="reg3">Индекс:</div><input type="text" class="reg4"/><span class="reg5"></span><div class="reg3">Регион проживания:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><select class="reg4" style="line-height:17px;height:20px;width:272px;" disabled="disabled" onchange="regionchange();"></select><span class="reg5"></span><div class="reg3">Город проживания:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><select class="reg4" disabled="disabled" style="line-height:17px;height:20px;width:272px;"></select><span class="reg5"></span><div class="reg3">Адрес:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><textarea class="reg4" style="height:50px;width:272px;" maxlength="940" cols="" rows="" ></textarea><span class="reg5"></span><div class="reg3">Любимая футбольная команда:</div><select class="reg4" style="line-height:17px;height:20px;width:272px;"></select><span class="reg5"></span><div class="reg3">Введите результат:<br/><span style="color:#656565;font-size:11px;">с картинки</span></div><div style="float:left;margin-top:7px; padding:12px;background-color:#000000;width:70px;color:#FFFFFF;font-size:24px;">ABFG</div><input type="text" class="reg4" style="width:140px;margin-top:21px;margin-left:30px;"/></div></div><div style="float:left;width:246px;height:825px;border-left:1px solid #C0C0C0;background-color:#EBEBEB;border-bottom-right-radius:10px;"><input name="" type="image" style="outline:none;margin-left:10px;margin-top:58px;float:left;position:relative;" src="/resources/images/vosk2.png?7"/><div style="font-size:11px;color:#000; margin-top:56px;width:220px;margin-left:5px;float:left;">Укажите подлинные данные при регистрации, это необходимо для денежных операций со счетом. Изменение данных после регистрации невозможно.</div><div style="font-size:11px;color:#000; margin-top:125px;width:220px;margin-left:20px;float:left;height:130px;"><span id="regmailw" style="display:none;">Для получения логина, укажите адрес действующей электронной почты.</span></div><input name="" type="image" style="outline:none;margin-left:10px;margin-top:173px;float:left;position:relative;" src="/resources/images/vosk2.png?7"/><div style="float:left;font-size:11px; color:#000; margin-top:167px; margin-left:5px;width:220px;">Регистрирующийся не может быть моложе 18 лет !</div><input type="checkbox"  value="checkbox" id="regcheck" style="float:left; margin-left:8px; margin-top:40px;"/><div style="float:left;font-size:11px;width:200px;color:#000; margin-top:38px; margin-left:10px;">Я подтверждаю достоверность указанных мной данных.<br />Я согласен и принимаю&nbsp;&nbsp;<a href="/pomosch/pravila/" style="color:#000;text-decoration:underline;">Правила приема ставок</a>&nbsp;&nbsp;БК WinLine.</div><div id="REGBUTTON" onclick="sendregform();"><span style="margin-left:10px;">Открыть</span></div></div></div></div><div id="DEMOREG" style="position:relative;float:left;width:743px;display:none;"><img src="/resources/images/vi.jpg" style="margin-bottom:-3px;margin-left:1px;"/><div style="float:left;width:743px;"><div style="position:relative;float:left;width:495px;border-bottom-left-radius:10px;height:255px;overflow:hidden;background-color:#FFF;"><div style="position:relative;float:left;width:488px;margin-left:7px;"><div class="reg3" style="margin-top:20px;">Имя:</div><input type="text" class="reg4" style="margin-top:19px;"/><span class="reg5"></span><div class="reg3">Адрес электронной почты:</div><input type="text" class="reg4" onKeyPress="return mailpress(event);" onContextMenu="return false;" onKeyDown="return mailpress2(event);"/><span class="reg5"></span><div class="reg3">Пароль:<br/><span style="color:#656565;font-size:11px;">не менее 6 символов</span></div><input type="password" class="reg4"/><span class="reg5"></span><div class="reg3">Повторите пароль:</div><input type="password" class="reg4"/><span class="reg5"></span><div class="reg3" style="margin-top:32px; margin-bottom:39px;">Введите результат:<br/><span style="color:#656565;font-size:11px;">с картинки</span></div><div style="float:left;margin-top:17px; padding:12px;background-color:#000000;width:70px;color:#FFFFFF;font-size:24px;">ABFG</div><input type="text" class="reg4" style="width:140px;margin-top:31px;margin-left:30px;"/></div></div><div style="float:left;height:255px;width:246px;border-left:1px solid #C0C0C0;background-color:#EBEBEB;border-bottom-right-radius:10px;"><input name="" type="image" style="outline:none;margin-left:10px;margin-top:132px;float:left;position:relative;" src="/resources/images/vosk2.png?7"/><div style="float:left;font-size:11px; color:#000; margin-top:136px; margin-left:5px;width:220px;">Регистрирующийся не может быть моложе 18 лет !</div><div id="DEMOBUTTON" onclick="senddemoform();"><span style="margin-left:10px;">Начать тест-драйв</span></div></div></div></div><div id="NYBONUS" style="position:relative;float:left;width:743px;display:none;"><div style="float:left;font-size:42px;width:744px;height:95px;font-weight:bold;margin-top:0px;margin-left:0px;color:#FFFFFF;background-image:url(/resources/images/ny.jpg);"><span style="float:left;margin-top:23px;width:189px;text-align:center;margin-left:462px;"></span></div><div style="position:relative;float:left;width:742px;background-color:#FFFFFF;"><div style="font-size:14px;color:#000000; width:702px; margin-left:20px;float:left;margin-top:30px;"><span style="font-size:18px;color:#000000;"><b>Новогодний бонус</b>*</span><br /><br />Специально для вас мы приготовили специальное бонусное предложение!<br /><br />Если Вы пополните счет до конца года, Вы получите новогодний бонус равный сумме Вашего депозита, но не более 1000 рублей. Бонус по акции будет зачислен на Ваш счет автоматически в течение 24 часов. Вы сразу сможете пользоваться бонусом для Ваших ставок на Winlinebet.com, но вывод бонусной суммы возможен после выполнения условий акции.<br /><br />Удачной игры на сайте WinlineBet.com!</div><div style="font-size:14px;color:#000000; width:702px; margin-left:0px;float:left;margin-top:30px;"><a href="/auth/payment/"><img  src="/resources/images/bonus24plata.png?7" style="cursor:pointer;"/></a></div><div style="font-size:14px;color:#000000; width:702px; margin-left:20px;float:left;margin-top:30px;margin-bottom:30px;">*<b>Правила и условия:</b><br /><br /><li class="LI"><span style="color:#000000;">Период действия данного предложения ограничен, для получения бонусы Вы должны пополнить свой счет до 31.12.2012 23:59</span></li><li class="LI"><span style="color:#000000;">Бонус по акции зачисляется на счет автоматически в течение 24 часов.</span></li> <li class="LI"><span style="color:#000000;">Предложение на получение бонуса распространяется на все методы оплаты, предлагаемые на сайте WinLineBet.com.</span></li><li class="LI"><span style="color:#000000;">Максимальная сумма бонуса, которая может быть зачислена на клиентский счет – 1000 рублей (30EUR,30USD).</span></li><li class="LI"><span style="color:#000000;">Для вывода со счета бонусной суммы необходимо сделать ставки на общую сумму в 10 раз превышающую сумму бонуса.</span></li><li class="LI"><span style="color:#000000;">В акции принимают участие ставки ординар с коэффициентом не менее 1.7, и ставки экспресс при условии, если в экспрессе есть хотя бы одна ставка с коэффициентом 1.7 и выше.</span></li><li class="LI"><span style="color:#000000;">При выводе средств со счета до выполнения условий акции, бонус аннулируется.</span></li><li class="LI"><span style="color:#000000;">Ставка по акции «Первая ставка не проиграет» не идет в зачет в данном предложении.</span></li><li class="LI"><span style="color:#000000;">WinLineBet.com оставляет за собой право аннулировать бонусное предложение, если мы убедимся, что произошло злоупотребление промо предложением, или обнаружим необычные цепочки ставок.</span></li><li class="LI"><span style="color:#000000;">Счета-дубликаты не участвуют в данной акции. Действует правило «предложения для одного счета, адреса, электронного адреса, номера кредитной/дебетовой карты или IP адреса».</span></li><li class="LI"><span style="color:#000000;">Если в данных Правилах и условиях не оговорено иное, к данной акции, а так же ко всем ставкам, сделанным в рамках данной акции, применяются Общие положения и условия Компании, приведенные на сайте WinLineBet.com.</span></li></div></div><div class="corn_lb"></div><div class="corn_rb"></div></div><div id="REGFINAL" style="position:relative;float:left;width:743px;display:none;"><img src="/resources/images/regfinal.jpg" style="margin-bottom:0px;margin-left:1px;"/><div class="white-block" style="font-size:14px;border-radius:0px;"><div class="text"><p><span id="regcomplete1"></span>, поздравляем, Ваша регистрация прошла успешно!</p><span style="display:none;"><p>Ваши логин и пароль для входа на сайт:</p>Логин: <b><span id="regcomplete2"></span></b><br /><br />Пароль: <b><span id="regcomplete3"></span></span></b><br /><br /><p>Уже сейчас Вы можете авторизоваться на сайте и начать играть!</p><p><b>Напоминаем, что для получения приветственного бонуса Вам необходимо прикрепить документ в личном кабинете после авторизации.</b></p><p>Мы отправили Ваши регистрационные данные на почтовый ящик, который Вы указали при регистрации. Обращаем Ваше внимание, что в некоторых случаях письмо может попасть в папку СПАМ. Чтобы избежать этого в дальнейшем, добавьте сайт winlinebet.com в список доверенных ресурсов. Если в течение 10-ти минут, регистрационное письмо не будет доставлено, обратитесь в службу поддержки по бесплатному номеру 8 (800) 555 66 37.</p><br /><p>Желаем удачной игры на сайте winlinebet.com!</p></div></div></div><div id="LOYAL" style="position:relative;float:left;width:743px;display:none;"><img style="" src="/resources/images/loyal1.jpg"></div><div id="BONUS1000" style="position:relative;float:left;width:743px;display:none;"><div style="float:left;font-size:36px;width:744px;height:95px;font-weight:bold;margin-top:0px;margin-left:0px;color:#FFFFFF;background-image:url(/resources/images/bonus1000.jpg);"><span style="float:left;margin-top:14px;width:189px;text-align:center;margin-left:520px;font-family:Veronica;"></span></div><div style="position:relative;float:left;width:742px;background-color:#FFFFFF;"><div style="font-size:14px;color:#000000; width:692px; margin-left:20px;float:left;margin-top:30px;"><span style="font-size:18px;color:#000000;"><b>Приветственный бонус</b>*</span><br /><br />Специально для Вас мы приготовили приветственное бонусное предложение.<br /><br />Если Вы пополните счет в течение 24 часов с момента регистрации, Вы можете получить приветственный бонус равный 50% от суммы Вашего первого депозита, но не более 1000 рублей. <br/><b>Бонус по акции будет зачислен на Ваш счет автоматически после проверки прикрепленных Вами документов в личном кабинете в течение 24 часов.</b><br /><br />Вы можете пользоваться бонусом для Ваших ставок на Winlinebet.com, но вывод бонусной суммы возможен после выполнения условий акции.</div><div style="font-size:14px;color:#000000; width:702px; margin-left:0px;float:left;margin-top:30px;"><a href="/auth/payment/"><img  src="/resources/images/bonus24plata.png?7" style="cursor:pointer;"/></a></div><div style="font-size:14px;color:#000000; width:702px; margin-left:20px;float:left;margin-top:30px;margin-bottom:30px;">*<b>Правила и условия:</b><br /><br /><li class="LI"><span style="color:#000000;">Период действия данного предложения ограничен и составляет 24 часа с момента регистрации на сайте WinLineBet.com.</span></li><li class="LI"><span style="color:#000000;">Бонус по акции зачисляется на счет автоматически в течение 24 часов.</span></li> <li class="LI"><span style="color:#000000;">Предложение на получение бонуса распространяется на все методы оплаты, предлагаемые на сайте WinLineBet.com.</span></li><li class="LI"><span style="color:#000000;">Максимальная сумма бонуса, которая может быть зачислена на клиентский счет – 1000 рублей (30EUR,30USD).</span></li><li class="LI"><span style="color:#000000;">Для вывода со счета бонусной суммы необходимо сделать ставки на общую сумму в 10 раз превышающую сумму бонуса.</span></li><li class="LI"><span style="color:#000000;">В акции принимают участие ставки ординар с коэффициентом не менее 1.7, и ставки экспресс при условии, если в экспрессе есть хотя бы одна ставка с коэффициентом 1.7 и выше.</span></li><li class="LI"><span style="color:#000000;">При выводе средств со счета до выполнения условий акции, бонус аннулируется.</span></li><li class="LI"><span style="color:#000000;">Ставка по акции «Первая ставка не проиграет» не идет в зачет в данном предложении.</span></li><li class="LI"><span style="color:#000000;">WinLineBet.com оставляет за собой право аннулировать бонусное предложение, если мы убедимся, что произошло злоупотребление промо предложением, или обнаружим необычные цепочки ставок.</span></li><li class="LI"><span style="color:#000000;">Счета-дубликаты не участвуют в данной акции. Действует правило «предложения для одного счета, адреса, электронного адреса, номера кредитной/дебетовой карты или IP адреса».</span></li><li class="LI"><span style="color:#000000;">Если в данных Правилах и условиях не оговорено иное, к данной акции, а так же ко всем ставкам, сделанным в рамках данной акции, применяются Общие положения и условия Компании, приведенные на сайте WinLineBet.com.</span></li></div></div><div class="corn_lb"></div><div class="corn_rb"></div></div>                        <div id="REMEMBER1" style="width:742px;display:none;">        <div class="cham01"><div class="cham4" style="margin-left:20px;">Шаг 1</div></div>         <div style="position:relative;float:left;width:742px;background-color:#EBEBEB;">        <span style="float:left;width:702px;margin-top:15px;margin-left:20px;font-size:12px; color:#000000;">Если Вы забыли данные для входа в систему, то их можно восстановить с помощью указанного при регистрации E-mail адреса. Если у Вас нет доступа к указанному при регистрации E-mail адресу, свяжитесь со <a href="/pomosch/obratnaya-svyaz/" style="text-decoration:none;color:#F47621;">службой технической поддержки</a>.</span>        <div style="float:left;width:480px;margin-top:0px;">        <span style="float:left;width:448px;margin-left:20px;height:1px; margin-top:20px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Адрес электронной почты:<br/><span style="color:#656565;font-size:11px;">указанный при регистрации</span></div>        <input type="text" name="rem1" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;" onKeyPress="return mailpress(event);"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:27px; margin-bottom:18px;">Введите результат:<br/><span style="color:#656565;font-size:11px;">с картинки</span></div><div style="float:left;margin-top:12px;padding:12px;background-color:#000000;width:70px;color:#FFFFFF;font-size:24px;">ABFG</div><input type="text" name="rem1" style="float:left;width:140px;margin-top:26px;margin-left:30px;font-size:11px;height:12px;"/><span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        </div><input name="" type="image" style="outline:none;margin-left:0px;margin-top:23px;float:left;position:relative;" src="/resources/images/vosk.png?7"/>        <div style="float:left;color:#656565;font-size:11px;margin-top:25px;margin-left:5px; width:215px;">Некоторые почтовые фильтры неправильно обрабатывают входящую корреспонденцию. Если Вы ожидаете важное письмо, всегда проверяйте папку «Спам» в своем ящике электронной почты!</div>        <div style="float:left;width:468px;margin-top:20px;margin-bottom:20px;">        <div id="REM1BUTTON" style="float:right;font-size:12px;font-weight:bold;text-align:center;width:96px;padding-top:7px;height:23px; background-image:url(/resources/images/rem1button.png?7);color:#FFFFFF;margin-top:15px;cursor:pointer;"onclick="saveremember1();">Отправить</div>        </div>        <div style="float:left;margin-top:30px;font-size:12px;margin-left:20px; margin-bottom:40px;line-height:18px;">        Клиентская и техническая поддержка:<a href="mailto:support@winlinebet.com" style="color:#F47621;text-decoration:none;"><b>support@winlinebet.com</b></a><br />Телефон: <b>8 (800) 555-66-37</b>        </div>        </div>        <!--<div class="cbi5"></div>-->        <div class="corn_lb"></div>        <div class="corn_rb"></div>        </div>                                        <div id="REMEMBER2" style="width:742px;display:none;">        <div class="cham01"><div class="cham4" style="margin-left:20px;">Шаг 2</div></div>         <div style="position:relative;float:left;width:742px;background-color:#EBEBEB;">        <span style="float:left;width:702px;margin-top:15px;margin-left:20px;font-size:12px; color:#000000;">        Для восстановления логина и пароля, Вы должны ответить на контрольный вопрос. Если Вы забыли ответ на вопрос, свяжитесь со <a href="/pomosch/obratnaya-svyaz/" style="text-decoration:none;color:#F47621;">службой технической поддержки</a>.</span>        <div style="float:left;width:480px;margin-top:0px;">        <span style="float:left;width:448px;margin-left:20px;height:1px; margin-top:20px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Контрольный вопрос:</div>        <input type="text" name="rem2" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;" disabled="disabled"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Контрольный ответ:</div>        <input type="text" name="rem2" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:27px; margin-bottom:18px;">Введите результат:<br/><span style="color:#656565;font-size:11px;">с картинки</span></div><div style="float:left;margin-top:12px;padding:12px;background-color:#000000;width:70px;color:#FFFFFF;font-size:24px;">ABFG</div><input type="text" name="rem2" style="float:left;width:140px;margin-top:26px;margin-left:30px;font-size:11px;height:12px;"/><span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        </div>        <div style="float:left;width:468px;margin-top:10px;margin-bottom:10px;">        <div id="REM2BUTTON" style="float:right;font-size:12px;font-weight:bold;text-align:center;width:96px;padding-top:7px;height:23px; background-image:url(/resources/images/rem1button.png?7);color:#FFFFFF;margin-top:15px;cursor:pointer;"onclick="saveremember2();">Далее</div>        </div>        <div style="float:left;width:480px;margin-top:0px;">        <span style="float:left;width:448px;margin-left:20px;height:1px; margin-top:20px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Ваш логин:</div>        <input type="text" name="rem2" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;"disabled="disabled"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Новый пароль:<br/><span style="color:#656565;font-size:11px;">не менее 6 символов</span></div>        <input type="text" name="rem2" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;" disabled="disabled"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        <div class="reg3" style="margin-top:10px;">Повторите новый пароль:</div>        <input type="text" name="rem2" style="margin-top:9px;width:266px;font-size:11px;height:12px;float:left;"disabled="disabled"/>        <span style="float:left;width:448px;margin-left:20px;margin-top:10px; border-bottom:1px solid #FFFFFF;"></span>        </div>        <div style="float:left;width:468px;margin-top:10px;margin-bottom:10px;">        <div id="REM3BUTTON" style="float:right;font-size:12px;font-weight:bold;text-align:center;width:96px;padding-top:7px;height:23px; background-image:url(/resources/images/rem1button.png?7);color:#FFFFFF;margin-top:15px;cursor:pointer;opacity:0.6;"onclick="saveremember3();">Сохранить</div>        </div>        <div style="float:left;margin-top:30px;font-size:12px;margin-left:20px; margin-bottom:40px;line-height:18px;">        Клиентская и техническая поддержка:<a href="mailto:support@winlinebet.com" style="color:#F47621;text-decoration:none;"><b>support@winlinebet.com</b></a><br />Телефон: <b>8 (800) 555-66-37</b>        </div>        </div>        <!--<div class="cbi5"></div>-->        <div class="corn_lb" ></div>        <div class="corn_rb" ></div>        </div>                                     <div id="LINIA" style=" width: 742px; display: none; "><div style="position:relative;float:left;width:742px;background-color:#FFFFFF;"><div class="corn_lt"></div><div class="corn_rt"></div><input name="" type="image" style="outline:none;margin-left:9px;margin-top:10px;float:left;position:relative;" src="/resources/images/vosk.png?7"><span style="float:left;margin-top:15px;margin-left:8px; width:682px;font-size:12px;color:#000000;margin-bottom:10px;">Для получения информации по интересующему наименованию или значению,наведите курсор и активируйте ссылку.</span></div><div style="position:relative;float:left;width:742px;height:55px;background-color:#4B4B4B;background-image:url(/resources/images/table1.png?7);margin-top:5px;"><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 11px; width: 89px; margin-top: 10px; margin-left: 7px; font-weight: bold; border: 0px; ">Время</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 11px; width: 203px; margin-top: 10px; margin-left: 0px; font-weight: bold; border: 0px; ">СОБЫТИЯ</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 11px; width: 219px; margin-top: 10px; margin-left: 0px; font-weight: bold; border: 2px solid rgb(183, 49, 4); ">ВЕСЬ МАТЧ</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 11px; width: 219px; margin-top: 10px; margin-left: 0px; font-weight: bold; border: 0px; ">ПЕРВАЯ ПОЛОВИНА</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 49px; margin-top: 10px; margin-left: 232px; border: 2px solid rgb(183, 49, 4); ">1x2</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 100px; margin-top: 10px; margin-left: 0px; border: 0px; ">гандикап</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 92px; margin-top: 10px; margin-left: 0px; border: 0px; ">тотал</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 49px; margin-top: 10px; margin-left: 0px; border: 0px; ">1x2</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 100px; margin-top: 10px; margin-left: 0px; border: 0px; ">гандикап</div><div name="LT" style="position: relative; float: left; color: rgb(206, 206, 206); font-size: 12px; width: 92px; margin-top: 10px; margin-left: 0px; border: 0px; ">тотал</div></div><div class="cham1" style="margin-top:5px;"><div class="cham2" title="Свернуть чемпионат" onclick="liclick(4);"><input name="" type="image" style="outline:none;margin-left:3px;margin-top:5px;float:left;position:relative;" src="/resources/images/shapesport2.png?7"></div><div class="cham8" style="background:url(/resources/images/star1.png?7) no-repeat;" title="Избранное" onclick="liclick(3);"></div><div class="cham4">Россия , Премьер лига</div><div class="cham5" style="cursor:pointer;" onclick="liclick(2);"></div><div class="cham6"></div></div><div id="event2710454" style="width:742px;margin-top:0px;float:left; background-color:#F8D8C2; height:192px;"><div class="TShow" style="height:78px;"><div class="Data1" style="margin-top:10px;line-height:15px;">06/11<br>18:45<br></div><div class="Title1"><div class="U1000000" style="width: 156px; border: 2px solid rgb(183, 49, 4); " name="LT">Локомотив М</div><div class="U2000000" style="width: 156px; border: 0px; " name="LT">ЦСКА</div><div style="width: 156px; border: 0px; " class="N1" name="LT">Ничья</div></div><div class="T1x2" style="margin-left:2px;"><div class="class3" onclick="txclick(this,0);"><div class="class4">3.12<br>#15922672<br>#0</div></div><div class="class3" onclick="txclick(this,0);"><div class="class4">2.15<br>#15922672<br>#1</div></div><div class="class3" onclick="txclick(this,0);"><div class="class4">3.07<br>#15922672<br>#2</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,0,0);"><div class="for2">0.0</div><div class="for3">2.24<br>#15922693<br>#0</div></div><div class="for1" onclick="foraclick(this,0,0);"><div class="for2">0.0</div><div class="for3">1.58<br>#15922693<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,0,0);"><div class="tot2">2.5</div><div class="tot3">б</div><div class="tot4">1.83<br>#15922687<br>#0</div></div><div class="tot1" onclick="totalclick(this,0,0);"><div class="tot2">2.5</div><div class="tot3">м</div><div class="tot4">1.87<br>#15922687<br>#1</div></div></div><div class="T1x2_"><div class="class3" onclick="txclick(this,1);"><div class="class4">3.75<br>#15922724<br>#0</div></div><div class="class3" onclick="txclick(this,1);"><div class="class4">2.80<br>#15922724<br>#1</div></div><div class="class3" onclick="txclick(this,1);"><div class="class4">2.05<br>#15922724<br>#2</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,1,0);"><div class="for2">+0+0.5</div><div class="for3">1.60<br>#15922678<br>#0</div></div><div class="for1" onclick="foraclick(this,1,0);"><div class="for2">-0-0.5</div><div class="for3">2.20<br>#15922678<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,1,0);"><div class="tot2">0.5-1</div><div class="tot3">б</div><div class="tot4">1.50<br>#15922701<br>#0</div></div><div class="tot1" onclick="totalclick(this,1,0);"><div class="tot2">0.5-1</div><div class="tot3">м</div><div class="tot4">2.40<br>#15922701<br>#1</div></div></div><div class="Add"><div class="ad1"><div class="ad2" title="Дополнительные линии" onclick="liclick(1);">+40</div></div><div class="ad4" title="Статистика" style="cursor:pointer;" onclick="liclick(2);"></div><div class="ad6" title="Избранное" onclick="liclick(3)"><input type="image" class="ad7" src="/resources/images/star1.png?7"></div><div class="ad8" onmouseover="this.style.color=&quot;#FFFFFF&quot;;this.style.backgroundColor=&quot;#F47621&quot;;" onmouseout="this.style.color=&quot;#F47621&quot;;this.style.backgroundColor=&quot;#3B3B3B&quot;;"><div class="ad2" onclick="liclick(0);" title=" НТВ+ Наш Футбол ">ТВ</div></div></div></div><div class="TShow" style="height:57px;"><div class="linia1"></div><div class="class1"></div><div class="Data1" style="margin-top:10px;line-height:15px;"></div><div class="Title1"><div class="U1000000" style="width: 156px; border: 0px; " name="LT">Локомотив М</div><div class="U2F47621" style="width: 156px; border: 0px; " name="LT">ЦСКА</div></div><div class="T1x2"><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,0,1);"><div class="for2">+0.5</div><div class="for3">1.63<br>#17393882<br>#0</div></div><div class="for1" onclick="foraclick(this,0,1);"><div class="for2">-0.5</div><div class="for3">2.14<br>#17393882<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,0,1);"><div class="tot2">2-2.5</div><div class="tot3">б</div><div class="tot4">1.62<br>#15922710<br>#0</div></div><div class="tot1" onclick="totalclick(this,0,1);"><div class="tot2">2-2.5</div><div class="tot3">м</div><div class="tot4">2.16<br>#15922710<br>#1</div></div></div><div class="T1x2_"><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,1,1);"><div class="for2">0.0</div><div class="for3">2.17<br>#15922677<br>#0</div></div><div class="for1" onclick="foraclick(this,1,1);"><div class="for2">0.0</div><div class="for3">1.61<br>#15922677<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,1,1);"><div class="tot2">1-1.5</div><div class="tot3">б</div><div class="tot4">2.30<br>#15922700<br>#0</div></div><div class="tot1" onclick="totalclick(this,1,1);"><div class="tot2">1-1.5</div><div class="tot3">м</div><div class="tot4">1.55<br>#15922700<br>#1</div></div></div></div><div class="TShow" style="height:57px;"><div class="linia1"></div><div class="class1"></div><div class="Data1" style="margin-top:10px;line-height:15px;"></div><div class="Title1"><div name="LT" class="U1000000" style="width: 156px; border: 0px; ">Локомотив М</div><div class="U2F47621" name="LT" style="width: 156px; border: 0px; ">ЦСКА</div></div><div class="T1x2"><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,0,2);"><div class="for2">+0+0.5</div><div class="for3">1.85<br>#17393882<br>#0</div></div><div class="for1" onclick="foraclick(this,0,2);"><div class="for2">-0-0.5</div><div class="for3">1.85<br>#17393882<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,0,2);"><div class="tot2">2.5-3</div><div class="tot3">б</div><div class="tot4">2.07<br>#15922710<br>#0</div></div><div class="tot1" onclick="totalclick(this,0,2);"><div class="tot2">2.5-3</div><div class="tot3">м</div><div class="tot4">1.67<br>#15922710<br>#1</div></div></div><div class="T1x2_"><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div><div class="class5"><div class="class6">&nbsp;</div></div></div><div class="Fora"><div class="for1" onclick="foraclick(this,1,2);"><div class="for2">+0.5</div><div class="for3">1.40<br>#15922677<br>#0</div></div><div class="for1" onclick="foraclick(this,1,2);"><div class="for2">-0.5</div><div class="for3">2.74<br>#15922677<br>#1</div></div></div><div class="Total"><div class="tot1" onclick="totalclick(this,1,2);"><div class="tot2">1.0</div><div class="tot3">б</div><div class="tot4">1.80<br>#15922700<br>#0</div></div><div class="tot1" onclick="totalclick(this,1,2);"><div class="tot2">1.0</div><div class="tot3">м</div><div class="tot4">1.90<br>#15922700<br>#1</div></div></div></div></div><div style="float:left;width:742px;background-color:#4B4B4B;height:10px;"></div><div id="LINIAEX" style="float: left; width: 742px; background-color: rgb(255, 255, 255); font-size: 12px; margin-top: -10px; "><span name="VIN" style="display: none; "><span style="float:left;width:722px;margin-top:10px;border-bottom:1px solid #DADADA;margin-bottom:10px;"></span><span style="float:left;width:150px;margin-left:10px;"><span style="background-color:#3B3B3B;color:#F47621;padding:3px;padding-left:12px;padding-right:12px;font-size:11px;font-weight:bold;">ТВ</span></span><span style="float:left;width:562px;">Телевизионные каналы, транслирующие данное событие.</span></span><span name="VIN" style="display: none; "><span style="float:left;width:722px;margin-top:10px;border-bottom:1px solid #DADADA;margin-bottom:10px;"></span><span style="float:left;width:150px;margin-left:10px;"><span style="background-color:#3B3B3B;color:#F47621;padding:3px;padding-left:12px;padding-right:12px;font-size:11px;font-weight:bold;">+40</span></span><span style="float:left;width:562px;">Дополнительные ставки.</span></span><span name="VIN" style="display: none; "><span style="float:left;width:722px;margin-top:10px;border-bottom:1px solid #DADADA;margin-bottom:10px;"></span><img style="float:left;margin-left:10px;" src="/resources/images/stats.png?7"><span style="float:left;width:562px;margin-left:133px;">Статистика, результаты, история встреч участников события...</span></span><span name="VIN" style="display: none; "><span style="float:left;width:722px;margin-top:10px;border-bottom:1px solid #DADADA;margin-bottom:10px;"></span><span style="float:left;width:150px;margin-left:10px;"><div style="background-color:#3B3B3B;width:17px;height:17px;"><img style="float:left;margin-left:3px;margin-top:2px;" src="/resources/images/star1.png?7"></div></span><span style="float:left;width:562px;">Добавление выбранного матча (чемпионата) в закладку «ФАВОРИТЫ». В закладке отображаются только выбранные Вами матчи или чемпионаты. При повторном  нажатии на значок матч (чемпионат) удаляется из закладки.</span></span><span name="VIN" style="display: none; "><span style="float:left;width:722px;margin-top:10px;border-bottom:1px solid #DADADA;margin-bottom:10px;"></span><span style="float:left;width:150px;margin-left:10px;"><div style="background-color:#434343;width:17px;height:17px;"><img style="float:left;margin-left:5px;margin-top:7px;" src="/resources/images/shapesport2.png?7"></div></span><span style="float:left;width:562px;">Свернуть/развернуть чемпионат.</span></span><span style="float: left; width: 722px; margin-top: 10px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(218, 218, 218); margin-bottom: 10px; "></span><span name="TLIN" style="float: left; width: 150px; margin-left: 10px; "><span style="background-color:#151617;color:#CECECE;padding:3px;padding-left:5px;padding-right:5px;">  ВЕСЬ МАТЧ  </span></span><span name="RLIN" style="float: left; width: 562px; ">Итог для всего матча. </span><span style="float: left; width: 722px; margin-top: 10px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(218, 218, 218); margin-bottom: 10px; "></span><span name="TLIN" style="float: left; width: 150px; margin-left: 10px; "><span style="background-color:#3D3D3D;color:#CECECE;padding:3px;padding-left:5px;padding-right:5px;">  1x2  </span></span><span name="RLIN" style="float: left; width: 562px; ">Вид ставки.</span><span style="float: left; width: 722px; margin-top: 10px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(218, 218, 218); margin-bottom: 10px; "></span><span name="TLIN" style="float: left; width: 150px; margin-left: 10px; "><span style="background-color:#F8D8C2;padding:3px;padding-left:5px;padding-right:5px;font-weight:bold;font-size:11px;">  Локомотив М  </span></span><span name="RLIN" style="float: left; width: 562px; ">Команда «хозяев» (первая команда в линии). При отображении команды черным цветом означает , что она идет в матче с положительной или нулевой форой. </span><span style="float: left; width: 722px; margin-top: 10px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(218, 218, 218); margin-bottom: 10px; "></span><span name="TLIN" style="float: left; width: 150px; margin-left: 10px; "><span style="background-color:#E1E1E1;border:1px solid #C9C9C9;padding:2px;padding-left:5px;padding-right:5px;font-weight:bold;">  3.12<br>  </span></span><span name="RLIN" style="float: left; width: 562px; ">Победа команды «Локомотив М» в матче с коэффициентом   3.12<br>  </span><span style="float: left; width: 722px; margin-top: 10px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(218, 218, 218); margin-bottom: 10px; display: none; "></span><span name="RLIN" style="float: left; width: 702px; margin-left: 10px; display: none; "></span><div style="float:left;width:700px;height:20px;"></div></div><div class="corn_lb"></div><div class="corn_rb"></div></div>     <div id="PLUSLARGE" style="position:relative;display:none;float:left;width:744px;"><div class="cham01"><div class="cham8" style="background:url(/resources/images/star1.png?7) no-repeat;" onclick="starclick(0)"></div><div class="cham7"></div><div class="cham3" style="width:632px;">Футбол</div><a href="" target="_blank"><div class="cham5"></div></a></div><div style="width:742px; height:90px;float:left; background-color:#242526;float:left; border:1px solid #434343; border-left:0px; border-right:0px;"><div style="width:320px;float:left;margin-left:20px; margin-top:15px;"><div style="width:0px;height:0px;float:left;margin-top:4px;margin-left:0px;width:70px;height:54px;margin-left:-10px;"><input type="image" src="/resources/images/beisboll000.png?7" style="float:left;margin-top:5px;"/></div><div style="width:320px;float:left; font-size:14px; font-weight:bold;color:#FFFFFF;margin-top:15px;">Участник 1</div><div style="width:320px;float:left; font-size:14px; font-weight:bold;color:#FFFFFF;margin-top:13px;">Участник 2</div></div><div style="width:60px;float:left;margin-left:0px; margin-top:25px; font-size:18px; font-weight:bold;color:#F47621;line-height:28px;"><div style="float:left; width:25px; height:32px; margin-left:-25px;"><input type="image" src="/resources/images/tennbalon.png?7" style="float:left;margin-top:5px;"/></div><div style="float:left;">A<br />40</div></div><div style="width:340px;float:left;margin-left:0px; margin-top:9px; font-weight:bold;font-size:12px;"><div style="width:62px;float:left;color:#FFFFFF;">1-й сет</div><div style="width:62px;float:left;color:#F47621;">2-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">3-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">4-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">5-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">6-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">7-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">8-й сет</div><div style="width:62px;float:left;color:#FFFFFF;">9-й сет</div></div><div style="width:330px;float:left;margin-left:-14px; text-align:center;margin-top:6px; font-weight:bold;font-size:12px;line-height:23px;"><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#F47621;border-left:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;border-right:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;border-right:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;border-right:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;border-right:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div><div style="width:62px;float:left;color:#FFFFFF;border-left:1px solid #434343;border-right:1px solid #434343;"><span style="color:#F47621;">1</span><br /><span style="color:#F47621;">2</span></div></div><div style="width:140px;float:left;margin-left:2px;"><div style="width:140px;float:left;"><span style="font-size:14px;color:#FFFFFF;float:left;width:43px;"><b>Ball</b></span><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/></div><div style="width:136px;float:left;"><span style="font-size:14px;color:#FFFFFF;float:left;width:43px;"><b>Strike</b></span><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/></div><div style="width:136px;float:left;"><span style="font-size:14px;color:#FFFFFF;float:left;width:43px;"><b>Out</b></span><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/><input type="image" src="/resources/images/beisboll1.png?7" style="float:left;margin-left:4px;"/></div></div></div><div style="position:relative;float:left;width:742px; margin-left:0px;background-color:#FFF;"><div style="position:relative;float:left;width:100%;background-color:#B5B5B5;height:40px;"><div class="pluslargemenu">Все</div><div class="pluslargemenu"><img src="/resources/images/fv00.png?7" style="margin-top:-3px;margin-left:-5px;margin-right:5px;float:left;"/><span style="float:left;">Избранное</span></div><div class="pluslargemenu" style="">Исход</div><div class="pluslargemenu" style="">Фора/Гандикап</div><div class="pluslargemenu" style="">Тотал/Голы</div><div class="pluslargemenu" style="">Счет</div><div class="pluslargemenu">Угловые</div><div class="pluslargemenu">Карточки</div><div class="pluslargemenu">Популярные</div></div><div style="position:relative;float:left;width:726px; margin-left:9px;"></div></div></div><div id="PLUS" style="position:relative;display:none;float:left;width:744px;"><div id="SCAUT" style="width:742px;"><div style="float:left;margin-bottom:18px;margin-top:-42px;margin-left:90px;"><img src="/resources/images/big_live0.png?7" style="margin-top:6px;float:left;"><div id="starscaut" class="cham8" style="background-image: url(/resources/images/star1.png?7); background-position: initial initial; background-repeat: no-repeat no-repeat;" onclick="starclick(0)"></div><div id="champscaut" class="cham4" style="width:472px;"></div></div><div style="width:742px;margin-left:0px; margin-top:0px;float:left; background-color:#232424;border-top-left-radius:10px;border-top-right-radius:10px;height:35px;"><div id="ucscaut1" style="width:333px;font-size:16px;color:#FFF;text-align:right;font-weight:bold;font-style:italic;float:left;margin-top:10px;"></div><div id="scautscore1" style="width:77px;font-size:31px;color:#F47621;text-align:center;font-weight:bold;font-style:italic;float:left;margin-top:1px;"></div><div id="ucscaut2" style="width:294px;font-size:16px;color:#FFF;font-weight:bold;font-style:italic;float:left;margin-top:10px;"></div><a id="radarscaut" target="_blank"><div class="cham5" style="background-image: url(/resources/images/stats.png?7); background-position: initial initial; background-repeat: initial initial;"></div></a></div><div style="float:left;width:100%;height:100px;border-top:1px solid #434343;border-bottom:1px solid #434343;background-color:#232424;"><div id="scautscore2" style="width:100%;text-align:center;color:#F47621;font-weight:bold;font-size:14px;margin-top:3px;height:5px;"></div><div style="width:360px;float:left;"><div id="scauttime" style="width:147px;font-size:12px;font-weight:bold;color:#fff;margin-top:6px;margin-left:15px;float:left;">2T 34</div><img class="scaut" src="/resources/images/scaut/004.png?7" style="margin-left:18px;" title="Владение мячом"><img class="scaut" src="/resources/images/scaut/005.png?7" style="margin-left:9px;" title="Удары в створ ворот"><img class="scaut" src="/resources/images/scaut/006.png?7" title="Удары мимо ворот" style="margin-left:9px;"><img class="scaut" src="/resources/images/scaut/003.png?7" style="margin-left:10px;" title="Угловые"><img class="scaut" src="/resources/images/scaut/007.png?7" title="Замены" style="margin-left:13px;"><img class="scaut" src="/resources/images/scaut/002.png?7" title="Желтые карточки" style="margin-left:13px;"><img class="scaut" src="/resources/images/scaut/001.png?7" title="Красные карточки" style="margin-left:14px;"><span style="float:left;width:330px;height:1px;background-color:#434343;margin-left:10px;margin-top:5px;margin-bottom:10px;"></span><div id="uscaut1" style="width:164px;font-size:11px;font-weight:bold;color:#F47621;margin-top:4px;margin-left:15px;height:17px;float:left;"></div><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><div id="uscaut2" style="width:164px;font-size:11px;font-weight:bold;color:#F47621;margin-top:4px;margin-left:15px;float:left;height:17px;">Спаркта Москва</div><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><span class="scaut1"></span><div></div></div><div id="lasteventscaut" style="float:left;width:334px;margin-left:20px;height:18px;border:1px solid #434343; margin-top:4px;position:relative;font-size:11px;font-weight:bold;color:#fff;"></div><div style="float:left;margin-top:4px;height:18px;width:14px;border:1px solid #434343;cursor:pointer;" onclick="scautshape();"><div id="shapplus" class="shapplus"></div></div><div style="float:left;height:0px;width:350px;margin-left:20px;"><div id="eventscaut" style="float:left;width:350px;display:none;margin-left:0px;background-color:#000;max-height:100px;border:1px solid #434343; margin-top:0px;overflow:hidden;line-height:17px;position:relative;z-index:5;background-color:#000;font-size:11px;font-weight:bold;color:#C1C1C1;"><div id="eventscautchild" style="float:left;width:329px;margin-left:5px;"></div><div id="eventscautScroll" style="width:6px;height:30px;border-radius:3px;background-color:#4b4b4b;margin-left:6px;margin-top:3px;float:left;"></div></div></div><div style="float:left;width:350px;margin-top:5px;margin-left:20px;position:relative;z-index:4;height:55px;overflow:hidden;" id="eventscaut1"><div id="eventscautchild1" style="float:left;width:332px;"><div style="float:left;width:332px;height:18px;border:1px solid #434343;margin-top:5px;"><div style="width:20px;color:#fff;font-size:12px;float:left;margin-left:5px;margin-top:2px;">1T</div><div style="float:left;background-color:#434343;height:18px;width:279px;overflow:hidden;"><div style="float:left;width:0px;height:0px;" id="eventgreen1"></div><div style="float:left;width:0px;height:0px;"><div id="greenscaut1" style="background-image:url(/resources/images/greenshap.png?7);height:18px;width:130px;"></div></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut3"></div></div><div id="scautscore11" style="width:25px;color:#fff;font-size:11px;text-align:center;float:left;margin-left:0px;margin-top:2px;">1:1</div></div><div style="float:left;width:332px;height:18px;border:1px solid #434343;margin-top:5px;"><div style="width:20px;color:#fff;font-size:12px;float:left;margin-left:5px;margin-top:2px;">2T</div><div style="float:left;background-color:#434343;height:18px;width:279px;overflow:hidden;"><div style="float:left;width:0px;height:0px;" id="eventgreen2"></div><div style="float:left;width:0px;height:0px;"><div id="greenscaut2" style="background-image:url(/resources/images/greenshap.png?7);height:18px;width:130px;"></div></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut2"></div><div class="minut1"></div><div class="minut3"></div></div><div id="scautscore22" style="width:25px;color:#fff;font-size:11px;text-align:center;float:left;margin-left:0px;margin-top:2px;">2:1</div></div><div style="float:left;width:332px;height:18px;border:1px solid #434343;margin-top:5px;"><div style="width:27px;color:#fff;font-size:12px;float:left;margin-left:5px;margin-top:2px;">1ОТ</div><div style="float:left;background-color:#434343;height:18px;width:272px;overflow:hidden;"><div style="float:left;width:0px;height:0px;" id="eventgreen3"></div><div style="float:left;width:0px;height:0px;"><div id="greenscaut3" style="background-image:url(/resources/images/greenshap.png?7);height:18px;width:130px;"></div></div><div class="minut11"></div><div class="minut22"></div><div class="minut3" style="width:34px;"></div><div class="minut33" id="scautscore33" style="font-size:11px;">0:3</div><div class="minut33">2OT</div><div class="minut11"></div><div class="minut22"></div><div class="minut3" style="width:34px;"></div></div><div id="scautscore44" style="width:25px;color:#fff;font-size:11px;text-align:center;float:left;margin-left:0px;margin-top:2px;">1:1</div></div><div style="float:left;width:332px;height:18px;border:1px solid #434343;margin-top:5px;"><div style="width:20px;color:#fff;font-size:12px;float:left;margin-left:5px;margin-top:2px;">П</div><div style="float:left;background-color:#434343;height:18px;"><div style="float:left;width:0px;height:0px;"><div id="greenscaut4" style="background-image:url(/resources/images/greenshap.png?7);height:18px;width:0px;"></div></div><div class="minut0" style="margin-left:31px;"></div><div class="minut0"></div><div class="minut0"></div><div class="minut0"></div><div class="minut0"></div><div style="float:left;width:21px;height:10px;margin-top:4px;border-right:1px solid #989898;"></div><div class="minut0" style="margin-left:21px;"></div><div class="minut0"></div><div class="minut0"></div><div class="minut0"></div><div class="minut0"></div><div style="float:left;height:14px;width:25px;"></div></div><div id="scautscore55" style="width:25px;color:#fff;font-size:11px;text-align:center;float:left;margin-left:0px;margin-top:2px;"></div></div></div><div id="eventscautScroll1" style="width: 6px; height: 22px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; background-color: #B4B4B4; margin-left: 6px; margin-top: 3px; float: left;"></div></div></div></div><div id="NOSCAUT"><div class="cham01"><div class="cham8" style="background:url(/resources/images/star1.png?7) no-repeat;" onclick="starclick(0)"></div><div class="cham7"></div><div class="cham3" style="width:632px;">Футбол</div><a href="" target="_blank"><div class="cham5"></div></a></div><div style="width:742px; height:60px;float:left; background-color:#242526;float:left;border:1px solid #434343; border-left:0px; border-right:0px;;"><div style="width:299px; text-align:center;float:left; font-size:14px; font-weight:bold;color:#FFFFFF; margin-top:15px;"><div style="width:240px;float:left;">Участник 1</div><div style="width:12px; height:16px;float:left; padding-top:2px; margin-top:1px; margin-left:250px; background:url(/resources/images/redcard.png?7) no-repeat;color:#1D1E1F; font-size:10px;">3</div><div style="width:12px; height:16px;float:left; padding-top:2px; margin-top:1px; margin-left:10px; background:url(/resources/images/yellowcard.png?7) no-repeat;color:#1D1E1F; font-size:10px;">1</div></div><div style="width:142px; text-align:center;float:left; float:left;margin-top:5px;border-left:1px solid #434343;border-right:1px solid #434343;"><div style="width:142px; text-align:center;float:left; font-size:12px; font-weight:bold;color:#FFFFFF; margin-top:4px;"><span>2T 43;&nbsp;&nbsp;&nbsp;</span><span style="color:#F47621">1:2</span></div><div style="width:142px; text-align:center;float:left; font-size:20px; font-weight:bold;color:#F47621; margin-top:5px;">2:0</div></div><div style="width:299px; text-align:center;float:left; font-size:14px; font-weight:bold;color:#FFFFFF; margin-top:15px;"><div style="width:240px;float:left; margin-left:59px;">Участник 2</div><div style="width:12px; height:16px;float:left; padding-top:2px; margin-top:1px; margin-left:15px; background:url(/resources/images/yellowcard.png?7) no-repeat;color:#1D1E1F; font-size:10px;">1</div><div style="width:12px; height:16px;float:left; padding-top:2px; margin-top:1px; margin-left:10px; background:url(/resources/images/redcard.png?7) no-repeat;color:#1D1E1F; font-size:10px;">3</div></div></div></div><div style="position:relative;float:left;width:742px; margin-left:0px;background-color:#FFF;"><div style="position:relative;float:left;width:100%;background-color:#B5B5B5;height:40px;"><div class="plusmenu">Все</div><div class="plusmenu"><img src="/resources/images/fv00.png?7" style="margin-top:-3px;margin-left:-5px;margin-right:5px;float:left;"/><span style="float:left;">Избранное</span></div><div class="plusmenu" style="">Исход</div><div class="plusmenu" style="">Фора/Гандикап</div><div class="plusmenu" style="">Тотал/Голы</div><div class="plusmenu" style="">Счет</div><div class="plusmenu">Угловые</div><div class="plusmenu">Карточки</div><div class="plusmenu">Популярные</div><div class="volume" onclick="volumclick();"></div></div><div style="position:relative;float:left;width:726px; margin-left:9px;"></div></div></div>     <div id="RENDER" style="width:744px;display:none;float:left;">        <div style="width:744px;height:36px;">        <span id="TITLE" style="float:left;font-size:16px;color:#E97323;font-weight:bold;"></span><select id="SORTCHAMPION" style="position:relative;float:right;margin-right:2px;width:100px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E; font-size:12px;">        <option>чемпионату</option>        <option>времени</option>        </select>        <select id="DATEBOX" style="position:relative;float:right;margin-right:5px; width:100px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E;font-size:12px;"></select>        <select id="GMT" style="position:relative;float:right;margin-right:5px; width:75px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E;font-size:12px;">        </select>        <select id="ELINE" style="position:relative;float:right;margin-right:5px; width:140px;color:#E97323; background-color:#4B4B4B;border:1px solid #7E7E7E;font-size:12px;"> <option>Европейская линия</option><option>Азиатская линия</option>  </select><div id="TIMER" style="position:relative;float:right;margin-right:15px;color:#CFCFCF; background-color:#4B4B4B;font-size:12px;margin-top:3px;">13-08-2012 12:35</div>        </div><div name="table_te" style="position:relative;float:left;width:744px;height:61px;display:none;"><div style="float:left;width:744px;height:36px;background-image:url(/resources/images/eurotable1.png?7);border-top-left-radius:10px;border-top-right-radius:10px;"><div style="float:left;width:267px;text-align:center;font-size:12px;font-weight:bold;margin-top:17px;color:#cecece;">СОБЫТИЯ</div><span class="et3">1</span><span class="et3">X</span><span class="et3">2</span><span class="et3" style="margin-left:10px;width:104px;">тотал меньше</span><span class="et3" style="width:104px;">тотал больше</span></div><div style="float:left;width:744px;height:25px;background-image:url(/resources/images/eurotable2.png?7);"><div style="float:left;width:267px;height:20px;"></div><span class="et4">1X</span><span class="et4">12</span><span class="et4">X2</span><span class="et4" style="margin-left:10px;width:104px;">фора 1</span><span class="et4" style="width:104px;">фора 2</span></div></div><div name="table_t" style="width:744px;height:55px;float:left;background-color:#4B4B4B;background-image:url(/resources/images/table1.png?7);display:none;">        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:89px;margin-top:10px;margin-left:7px;font-weight:bold;">Время</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:203px;margin-top:10px;margin-left:0px;font-weight:bold;">СОБЫТИЯ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:219px;margin-top:10px;margin-left:0px;font-weight:bold;">ВЕСЬ МАТЧ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:219px;margin-top:10px;margin-left:0px;font-weight:bold;">ПЕРВАЯ ПОЛОВИНА</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:232px;">1x2</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:0px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:0px;">тотал</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:0px;">1x2</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:0px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:0px;">тотал</div>        </div>        <div name="table_t" style="width:744px;height:55px;float:left;background-color:#4B4B4B;background-image:url(/resources/images/table2.png?7);display:none;">        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:89px;margin-top:10px;margin-left:12px;font-weight:bold;">Время</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:220px;margin-top:10px;margin-left:45px;font-weight:bold;">СОБЫТИЯ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:250px;margin-top:10px;margin-left:83px;font-weight:bold;">ВЕСЬ МАТЧ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:335px;">12</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:28px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:40px;">тотал</div>        </div>        <div name="table_t" style="width:744px;height:55px; float: left;background-color:#4B4B4B;background-image:url(/resources/images/table2.png?7);display:none;">        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:89px;margin-top:10px;margin-left:12px;font-weight:bold;">Время</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:220px;margin-top:10px;margin-left:45px;font-weight:bold;">СОБЫТИЯ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:250px;margin-top:10px;margin-left:83px;font-weight:bold;">ВЕСЬ МАТЧ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:335px;">1x2</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:28px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:40px;">тотал</div>        </div>        <div name="table_t" style="width:744px;height:55px; float: left;background-color:#4B4B4B;background-image:url(/resources/images/table1.png?7);display:none;">        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:89px;margin-top:10px;margin-left:7px;font-weight:bold;">Время</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:203px;margin-top:10px;margin-left:0px;font-weight:bold;">СОБЫТИЯ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:219px;margin-top:10px;margin-left:0px;font-weight:bold;">ВЕСЬ МАТЧ</div>        <div style="position:relative;float:left;color:#CECECE; font-size:11px; width:219px;margin-top:10px;margin-left:0px;font-weight:bold;">ПЕРВАЯ ПОЛОВИНА</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:232px;">12</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:0px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:0px;">тотал</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:49px;margin-top:10px;margin-left:0px;">12</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:100px;margin-top:10px;margin-left:0px;">гандикап</div>        <div style="position:relative;float:left;color:#CECECE; font-size:12px; width:92px;margin-top:10px;margin-left:0px;">тотал</div>        </div>        <div id="TABLE" style="width:744px; float: left;"></div>        <div id="white-block" style="margin-top:20px;float:left;"><div class="white-block"></div></div></div>                    <div id="RESULT" style="display:none;width:744px;">        <div style="position:relative;float:left;width:658px;height:36px; margin-top:-37px;">        <select id="RESULTBOXCHAMP" style="position:relative;float:right;margin-right:5px;width:150px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E; font-size:12px;" onchange="extractResult3();"></select>        <select id="RESULTBOXSPORT" style="position:relative;float:right;margin-right:5px; width:105px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E;font-size:12px;" onchange="extractResult();"></select>        <select id="RESULTBOXDATA" style="position:relative;float:right;margin-right:5px; width:105px;color:#CFCFCF; background-color:#4B4B4B;border:1px solid #7E7E7E;font-size:12px;"        onchange="resultdatechange();"></select>        </div>        <div class="cham01" style="float:left;font-size:12px;color:#FFFFFF;width:744px; font-weight:bold;">        <div style="float:left; margin-left:10px; width:75px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">Дата</div></div>        <div style="float:left; margin-left:5px; width:418px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">События</div></div>        <div style="float:left; margin-left:5px; width:220px;height:31px;overflow:hidden;"><div class="padd">Итог</div></div>        </div>        <div id="INNERRESULT" style="float:left;font-size:11px;color:#000000;width:744px;"></div>        </div>                        <div id="ROSPIS" style="position:relative;display:none;float:left;width:744px;"><div style="float:left;margin-bottom:18px;margin-top:-43px;margin-left:90px;"><div class="cham8" style="background:url(/resources/images/star1.png?7) no-repeat;" onclick="starclick(1)"></div><div class="cham4" style="width:auto;"></div></div><div style="width:742px; height:38px;float:left; background-color:#242526;float:left;border:1px solid #434343; border-left:0px; border-right:0px;border-top-left-radius:10px;border-top-right-radius:10px;"><div style="width:319px; text-align:right;float:left;font-size:16px; font-weight:bold;color:#FFFFFF; margin-top:10px;"><div style="width:319px;float:left;font-style:italic;">Участник 1</div></div><div style="width:102px; text-align:center;float:left; margin-top:5px;"><div style="width:102px; text-align:center;float:left; font-size:12px; font-weight:bold;color:#FFFFFF;font-style:italic; margin-top:0px;"></div><div style="width:102px; text-align:center;float:left; font-size:12px; font-weight:bold;color:#FFFFFFF; margin-top:0px;"></div></div><div style="width:289px; text-align:left;float:left; font-size:16px; font-weight:bold;color:#FFFFFF; margin-top:10px;"><div style="width:289px;float:left;font-style:italic; margin-left:0px;">Участник 2</div></div><a href="" target="_blank"><div class="cham5" style="margin-top:9px;"></div></a></div><div style="position:relative;float:left;width:742px; margin-left:0px;background-color:#FFFFFF;"><div style="position:relative;float:left;width:100%;background-color:#B5B5B5;height:40px;"><div class="rosmenu">Все</div><div class="rosmenu"><img src="/resources/images/fv00.png?7" style="margin-top:-3px;margin-left:-5px;margin-right:5px;float:left;"/><span style="float:left;">Избранное</span></div><div class="rosmenu">Исход</div><div class="rosmenu">Фора/Гандикап</div><div class="rosmenu">Тотал/Голы</div><div class="rosmenu">Счет</div><div class="rosmenu">Угловые</div><div class="rosmenu">Карточки</div><div class="rosmenu">Популярные</div></div><div style="position:relative;float:left;width:726px; margin-left:9px;"></div></div></div><div id="SCAN" style="position:relative;float:left;width:742px;display:none;"><div style="position:relative;float:left;width:742px;background-color:#EBEBEB;"><div class="corn_lt"></div><div class="corn_rt"></div><div style="float:left;margin-top:30px;margin-left:20px; width:702px;font-size:14px;color:#000000;margin-bottom:30px;">При осуществлении выплат клиентам БК WinLine запрашивает у клиентов документы для удостоверения личности.<BR /><BR />Для загрузки документов воспользуйтесь формой:<BR /></div><div id="formsend" style="float:left;width:742px;background-color:#EBEBEB;"></div><div id="SCANBUTTON" style="float:left;font-size:12px;font-weight:bold;text-align:center;width:96px;padding-top:7px;height:23px; background-image:url(/resources/images/rem1button.png?7);color:#FFFFFF;margin-top:15px;margin-left:287px;cursor:pointer;margin-bottom:30px;">Отправить</div><div style="float:left;margin-top:10px;margin-left:20px; width:702px;font-size:14px;color:#000000;margin-bottom:30px;">При пополнении счета с использованием банковских карт, компания устанавливает правомерность использования Клиентом соответствующей карты.<BR /><BR />Для того чтобы перечисленные средства стали доступны для ставок необходимо предоставить сканированную копию паспорта (разворот документа с фотографией, подписью и датой выдачи документа) и копию  обеих сторон банковской карты, с которой осуществлялся денежный перевод на игровой счет. На скане лицевой стороны карты должны быть видны ФИО владельца карты, банк-эмитент, а также первые 6 и последние 4 цифры номера карты, остальные цифры можно закрыть. На скан-копии оборотной стороны - образец подписи владельца карты. CVC2/CVV2, код необходимо обязательно закрыть. Для неименных или виртуальных карт, не имеющих физического носителя, необходимо прислать копию договора на открытие карты, где будет указаны ФИО и номер карты (либо выписка операций по карте с ФИО и номером карты).<BR /><BR />Пополнение счета клиента возможно только с карты самого клиента (ФИО владельца карты и владельца счета должны совпадать). Использование чужих карт для пополнения счета запрещено.<BR /><BR /></div></div><div class="corn_lb"></div><div class="corn_rb"></div></div><div id="SEOSTAVKI" style="width:742px;background-color:#fff;display:none;"><img src="/resources/images/seoshap.jpg" style="float:left;"><div id="PRTABLE6" style="width:742px;float:left;background-color:#fff;"></div></div><div id="sss" style="width:0px;height:0px;"></div><div id="KABINET" style="width:744px;display:none;"><div style="width:744px;height:34px;background-image:url(/resources/images/gl.png?7);border-top-left-radius:10px;border-top-right-radius:10px;"><a class="kabmenu" href="/auth/istoria/" style="margin-left:22px;">Мои ставки</a><a class="kabmenu" href="/auth/plata/">Мои платежи</a><a href="/auth/payment/" class="kabmenu" style="background-image:url(/resources/images/kab1.png?7)">Пополнение счета</a><a class="kabmenu" href="/auth/personal/">Личные данные</a><a href="/auth/mydoc/" class="kabmenu">Мои документы</a></div><div id="FAMILIA" style="width:742px;display:none;line-height:15px;"><div id="FAM1" style="position:relative;float:left;width:744px;"><div style="position:relative;float:left;width:496px;background-color:#FFF;height:540px;border-bottom-left-radius:10px;"><div class="reg6" style="margin-top:20px;">Фамилия, Имя:</div><div class="reg7" style="font-size:12px;margin-top:16px;"></div><span class="reg8" style="display:none;"></span><span class="reg8" ></span><div class="reg6">Дата рождения:</div><div class="reg7" style="font-size:12px;">18.02.1975</div><span class="reg8"></span><div class="reg6">Номер счета:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8" ></span><div class="reg6">Валюта счета:</div><select class="reg7" style="line-height:17px;height:20px;width:86px;" disabled="disabled"></select><span class="reg8"></span><div class="reg6">E-mail:</div><input type="text" class="reg7" onKeyPress="return mailpress(event);" disabled="disabled"/><span class="reg8"></span><div class="reg6">Страна проживания:</div><select class="reg7" style="line-height:17px;height:20px;width:271px;" onchange="codecountry2();"></select><span class="reg8"></span><div class="reg6">Мобильный телефон:</div><div style="width:0px;height:0px;float:left;margin-left:0px;margin-top:13px;position:relative;z-index:1;"><div style="font-size:11px;color:#000;padding-left:3px;" id="codcount2"></div></div><input type="text" class="reg7" style="position:relative;z-index:0;" onKeyPress="return telpress(event);"/><span class="reg8"></span><div class="reg6">Почтовый индекс:</div><input type="text" class="reg7"/><span class="reg8"></span><div class="reg6">Регион проживания:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><select class="reg7" style="line-height:17px;height:20px;width:271px;" disabled="disabled" onchange="regionchange2();"></select><span class="reg8"></span><span class="reg8"></span><div class="reg6">Город проживания:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><select disabled="disabled" class="reg7" style="line-height:17px;height:20px;width:271px;"></select><span class="reg8"></span><div class="reg6">Адрес:<br/><span style="color:#656565;font-size:11px;">прописка или регистрация</span></div><textarea class="reg7" style="width:270px;height:45px;" maxlength="940" cols="" rows=""></textarea><span class="reg8"></span><div class="reg6">Любимая футбольная команда:</div><select class="reg7" style="line-height:17px;height:20px;width:271px;"></select><span class="reg8"></span><div style="font-size:10px;float:left;margin-left:20px;width:460px;margin-top:5px;color:#656565;">Для изменения нередактируемых данных необходимо обратиться в службу поддержи через форму <a href="/pomosch/obratnaya-svyaz/" style="color:#0000EE;">Обратной связи</a>. В обращении необходимо указать причину обращения и ошибку.</div></div><div style="position:relative;float:left;width:247px;background-color:#EBEBEB;height:540px;border-left:1px solid #C1C1C1;border-bottom-right-radius:10px;"><div class="reg6" style="width:94px;margin-top:20px;">Nick:<br/><span style="color:#656565;font-size:11px;">от 4 симв</span></div><input type="text" class="reg7" style="width:104px;margin-top:19px;"/><span class="reg8"></span><div class="reg6" style="width:94px;">Pin:<br/><span style="color:#656565;font-size:11px;">4 цифры</span></div><input type="text" class="reg7" style="width:104px;"/><span class="reg8" style="display:none;"></span><div class="reg6" style="width:94px;display:none;">Телефон:</div><input type="text" class="reg7" style="width:104px;display:none;"/><div style="float:left;width:200px;margin-left:20px;color:#656565;font-size:11px;margin-top:20px;margin-bottom:8px;"> *Nick - для входа на сайт<br />*Pin - для ставок по телефону</div><div style="position:relative;float:left;width:247px;"><div id="FAM2" class="shappa" onclick="fam2click();"></div> <div id="FAM2BUTTON" style="float:left;font-size:12px;text-decoration:underline;color:#000;margin-top:17px;margin-left:5px;cursor:pointer;margin-bottom:10px;" onclick="fam2click();">Изменить пароль</div></div><div id="FAM3" style="position:relative;float:left;width:247px;display:none;height:0px;">  <div class="reg68">Текущий пароль:</div>                <input type="password" class="reg7" style="margin-top:3px;width:149px;margin-left:32px;"/>                <span class="reg8"></span>                <div class="reg68">Новый пароль:<br/><span style="color:#656565;">не менее 6 символов</span></div>                <input type="password" class="reg7" style="margin-top:3px;width:149px;margin-left:32px;"/>                <span class="reg8"></span>                <div class="reg68">Повторите новый пароль:</div>                <input type="password" class="reg7" style="margin-top:3px;width:149px;margin-left:32px;"/>                <span class="reg8"></span>                <div id="FAM3BUTTON" style="float:left;font-size:11px;font-weight:bold;text-decoration:underline;color:#2F2FF7;margin-top:0px;margin-left:125px;cursor:pointer;"onclick="fam33click();">Сохранить</div></div><span class="reg8"></span><div id="FAM1BUTTON" onclick="fam0click();"><span style="margin-left:10px;">Сохранить</span></div></div></div></div><div id="MYDOC" style="width:744px;display:none;"><div id="FAM4" style="position:relative;float:left;width:744px;display:none;"><div style="position:relative;float:left;width:496px;background-color:#FFF;border-bottom-left-radius:10px;height:230px;"><select class="reg7" style="width:430px;margin-left:20px;margin-top:20px;font-size:14px;" onchange="drawfamilia4();"></select>                <div class="reg6">Серия:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span><div class="reg6">Номер:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span><div class="reg6">Дата выдачи:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span><div class="reg6">Действителен до:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span><div class="reg6">Кем выдан:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span><div class="reg6">Код подразделения:</div><div class="reg7" style="font-size:12px;"></div><span class="reg8"></span></div><div style="position:relative;float:left;width:247px;background-color:#EBEBEB;height:230px;border-left:1px solid #C1C1C1;border-bottom-right-radius:10px;">                <div id="FAM1BUTTON4" onclick="fam4click();"><span style="margin-left:10px;">Добавить</span></div></div></div> <div id="FAM5" style="position:relative;float:left;width:744px;"><div style="position:relative;float:left;width:496px;background-color:#FFF;border-bottom-left-radius:10px;height:147px;"><select class="reg7" style="width:451px;font-size:14px;margin-top:20px;margin-left:20px;" onchange="radioclick();"></select><div style="display:none;"><span class="reg8"></span><div class="reg6">Серия:</div><input type="text" class="reg7"/><span class="reg8"></span><div class="reg6">Номер:</div><input type="text" class="reg7"/><span class="reg8"></span><div class="reg6">Дата выдачи:</div><select class="reg7" style="line-height:17px;height:20px;width:69px;margin-left:0px;"></select><select class="reg7" style="line-height:17px;height:20px;width:113px;margin-left:5px;"></select><select class="reg7" style="line-height:17px;height:20px;width:80px;margin-left:5px;"></select><span class="reg8"></span><div class="reg6">Действителен до:</div><select class="reg7" style="line-height:17px;height:20px;width:69px;margin-left:0px;"></select><select class="reg7" style="line-height:17px;height:20px;width:113px;margin-left:5px;"></select><select class="reg7" style="line-height:17px;height:20px;width:80px;margin-left:5px;"></select><span class="reg8"></span><div class="reg6">Кем выдан:</div><input type="text" class="reg7"/><span class="reg8"></span><div class="reg6">Код подразделения:</div><input type="text" class="reg7"/><span class="reg8"></span><div style="font-size:10px;float:left;margin-left:20px;width:460px;margin-top:5px;color:#656565;">Для изменения нередактируемых данных необходимо обратиться в службу поддержи через форму <a href="/pomosch/obratnaya-svyaz/" style="color:#0000EE;">Обратной связи</a>. В обращении необходимо указать причину обращения и ошибку.</div></div><div id="SCANUS2"></div><div id="SCANUS3" style="font-size:11px;color:#656565;float:left;width:440px;margin-left:20px;margin-top:15px;display:none;">Цветные копии принимаются в форматах: jpeg, png, tiff. Размер файла не должен превышать 3Mb.</div></div><div style="position:relative;float:left;width:247px;background-color:#EBEBEB;border-left:1px solid #C1C1C1;border-bottom-right-radius:10px;height:147px;"><div id="SCANUS"></div> <div id="FAM5BUTTON" onclick="fam5click();"><span style="margin-left:10px;">Отправить</span></div></div> </div></div><div id="HISTORY" style="display:none;width:744px;">                <div style="position:relative;float:left;width:744px;background-color:#fff;height:56px;">                <select id="ISTORIABOX" style="position:relative;float:right;margin-right:5px;width:125px;color:#000;margin-top:15px; background-color:#FFF;border:1px solid #7E7E7E; font-size:14px;">                <option>все</option>                <option>выигрышные</option>                <option>проигрышные</option>                <option>нерассчитанные</option><option>в обработке</option><option>отклоненные</option>                </select>                <select id="ISTORIABOXDATA" style="position:relative;float:right;margin-right:5px; width:105px;color:#000;margin-top:15px; background-color:#FFF;border:1px solid #7E7E7E;font-size:14px;"></select></div><div class="cham01" style="float:left;font-size:12px;color:#FFF;width:744px; font-weight:bold;"><div style="float:left; margin-left:10px; width:63px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">Дата</div></div><div style="float:left; margin-left:5px; width:284px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">События</div></div><div style="float:left; margin-left:5px; width:45px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">Коэф</div></div><div style="float:left; margin-left:5px; width:176px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">Результат</div></div><div style="float:left; margin-left:5px; width:65px;border-right:1px solid #434343;height:31px;overflow:hidden;"><div class="padd">Сумма</div></div><div style="float:left; margin-left:5px; width:70px;height:31px;overflow:hidden;"><div class="padd">Итог</div></div></div><div id="INNERHISTORY" style="float:left;font-size:11px;color:#000000;width:744px;"></div></div><div id="SCHET" style="position:relative;float:left;width:744px;font-size:12px;color:#000;display:none;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"><div id="VVOD" class="VVOD" style="margin-left:418px;border-top-left-radius:10px;border-bottom-left-radius:10px;border: 1px solid #D06D26;" onclick="vvodclick();">Пополнение счета</div><div id="VIVOD" class="VIVOD" style=" margin-left:0px;border-top-right-radius:10px;border-bottom-right-radius:10px;border: 1px solid #C5C5C5;border-left:0px;" onclick="vivodclick();">Вывод средств</div><div style="position:relative;float:left;width:742px;margin-top:10px;"><div style="position:relative;float:left;width:742px;"><span style="float:left;margin-top:15px;margin-left:25px; font-size:18px;font-weight:bold;">Система онлайн платежей:</span><div id="VVODICO" style="float:left;width:742px;margin-left:4px;"><div class="money1"><img src="/resources/money/p1-2.png?7" /></div><div class="money1"><img src="/resources/money/p2-2.png?7" /></div><div class="money1"><img src="/resources/money/p3-2.png?7" /></div><div class="money1"><img src="/resources/money/p4-2.png?7" /></div><div class="money1"><img src="/resources/money/p5-2.png?7" /></div><div class="money1"><img src="/resources/money/p6-2.png?7" /></div><div class="money1"><img src="/resources/money/p7-2.png?7" /></div><div class="money1"><img src="/resources/money/p8-2.png?7" /></div><div class="money1"><img src="/resources/money/p9-2.png?7" /></div><div class="money1"><img src="/resources/money/p10-2.png?7" /></div><div class="money1"><img src="/resources/money/p11-2.png?7" /></div><span style="float:left;margin-top:25px;margin-left:20px; font-size:18px;font-weight:bold;width:100%;">Оплата наличными:</span><div class="money1"><img src="/resources/money/p12-2.png?7" /></div><div class="money1"><img src="/resources/money/p13-2.png?7"/></div><div class="money1"><img src="/resources/money/p14-2.png?7"/></div><div class="money1"><img src="/resources/money/p15-2.png?7"/></div><div class="money1"><img src="/resources/money/p16-2.png?7"/></div><div class="money1"><img src="/resources/money/p17-2.png?7"/></div><div class="money1"><img src="/resources/money/p18-2.png?7"/></div><div style="float:left;height:10px;width:742px;"></div></div><div id="VIVODICO" style="float:left;width:742px;margin-left:4px;"><div class="money2"><img src="/resources/money/p1-2.png?7" /></div><div class="money2"><img src="/resources/money/p2-2.png?7" /></div><div class="money2"><img src="/resources/money/p3-2.png?7" /></div><div class="money2"><img src="/resources/money/p4-2.png?7" /></div><div class="money2"><img src="/resources/money/p5-2.png?7" /></div><div class="money2"><img src="/resources/money/p6-2.png?7" /></div><div class="money2"><img src="/resources/money/p2-2.png?7" /></div><div class="money2"><img src="/resources/money/p8-2.png?7" /></div><div class="money2"><img src="/resources/money/p9-2.png?7" /></div><div class="money2"><img src="/resources/money/p10-2.png?7" /></div><div class="money2"><img src="/resources/money/p11-2.png?7" /></div><span style="float:left;margin-top:25px;margin-left:20px; font-size:18px;font-weight:bold;width:100%;display:none;" id="PLTER" >Платежные терминалы:</span><div class="money2"><img src="/resources/money/p12-2.png?7" /></div><div class="money2"><img src="/resources/money/p13-2.png?7" /></div><div class="money2"><img src="/resources/money/p14-2.png?7" /></div><div class="money2"><img src="/resources/money/p15-2.png?7" /></div><div class="money2"><img src="/resources/money/p16-2.png?7" /></div><div class="money2"><img src="/resources/money/p17-2.png?7"/></div><div class="money2"><img src="/resources/money/p18-2.png?7"/></div><div style="float:left;height:10px;width:742px;"></div></div><div class="schet1" id="schet1" style="font-size:14px;"><b>Пополнение игрового счета БК WinLine возможно следующими способами:</b><br /><br /><li style="display:none;">Наличными в пунктах приема ставок БК WinLine.</li><li>C помощью банковских карт VISA / MasterCard.</li><li>C помощью платежных систем -  WebMoney, Yandex.Money, QIWI-кошелек, Moneta.ru, Skrill, LiqPay</li><li>Через операторов мобильной связи - МТС, Мегафон, Билайн.</li><li>Наличными - Свободная Каccа, Comepay, Связной, Contact, Rapida, Евросеть</li><div style="float:left;height:40px;width:702px;"></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Банковские карты</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p1-4.png?7" /></div><span style="float:left;width:600px;height:20px;margin-left:20px;margin-top:15px;color:#F47621;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Средства зачисляются только с карт российских банков-эмитентов. Для пополнения счета с карты банков других стран, воспользуйтесь платежной системой Skril.<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false"><img style="float:left;margin-top:15px;" src="/resources/images/ucs.png?7" /><span style="float:left;width:560px;margin-left:20px;margin-top:20px;">Вы можете моментально пополнить свой счет с пластиковых карт Visa и MasterCard. Банковским партнером, осуществляющим эквайринг, является <a href="http://www.ucs.su/" target="_blank" style="color:#E97323;text-decoration:none;">UCS (United Cards Service)</a>. Процессинг предоставляется платежным провайдером Chronopay.</span><span style="float:left;width:660px;height:1px;"></span><img style="float:left;margin-top:20px;" src="/resources/images/vosk.png?7" /><span style="float:left;width:602px;color:#E97323;margin-top:20px; margin-left:5px;"><b>Пополнение счета клиента возможно только с карты самого клиента (ФИО владельца карты и владельца счета должны совпадать). Использование чужих карт для пополнения счета запрещено!</b></span><span style="float:left; margin-left:25px;width:622px;margin-top:20px;">При пополнении счета с использованием банковских карт, компания устанавливает правомерность использования Клиентом соответствующей карты. При выводе средств помимо гражданского паспорта, необходимо предоставить копию обеих сторон банковской карты, подробнее см. п2.9 в <a href="/pomosch/pravila/" style="color:#E97323;text-decoration:none;">Правилах пополнения и вывода средств</a>.</span><img src="/resources/images/master.bmp" style="float:left;margin-top:10px;margin-left:210px;"/><img src="/resources/images/visa.bmp" style="float:left;margin-top:10px;margin-left:20px;"/><span style="float:left;width:622px;margin-left:25px;margin-top:10px;"><i>При пополнении счета банковской картой (включая ввод номера карты), обработка платежа происходит на сайте системы электронных платежей Хронопэй, которая прошла международную сертификацию. Это значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в Букмекерскую компанию WinLine, их обработка полностью защищена и никто, в том числе www.winlinebet.com , не может получить персональные и банковские данные клиента. Для защиты информации от несанкционированного доступа на этапе передачи от клиента на сервер системы Хронопэй используется протокол SSL 3.0. Компания Хронопэй прошла PCI-сертификацию (PCI Data Security Standards или Стандарты безопасности хранения данных PCI, разработанные и внедренные платежными системами VISA и MasterCard для обеспечения безопасного хранения личных данных владельца банковской карты. Более того, надежность ChronoPay подтверждена сертификатом HackerSafe.</i></span></div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Skrill</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p2-4.png?7" /></div><div class="reg17">E-mail:</div><input type="text" class="reg155"  onKeyUp="schetsummchange1();" /><select class="reg291"><option>USD</option><option>EUR</option></select><div style="float:left;width:702px;height:2px;"></div><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Skrill – это безопасный способ оплаты, который позволяет приобретать товары по всему миру, не раскрывая личных финансовых данных. Указав лишь адрес электронной почты, вы можете совершать покупки в 200 странах мира, используя более 100 вариантов оплаты, в том числе посредством всех основных кредитных и дебетовых карт.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через QIWI Кошелек</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p3-4.png?7" /></div><div class="reg17">Номер телефона:</div><div style="width:0px;height:0px;margin-left:185px;position:absolute;margin-top:11px;"><div class="itemFlag" onclick="cs_(&quot;countryList&quot;)[0].style.display=&quot;block&quot;" style="background-position: -224px -121px;cursor:pointer;margin-right:5px;"></div><div style="font-size:12px;color:#000;padding-top:5px;" id="itemcode1">+7</div></div><div style="width:0px;height:0px;margin-left:180px;position:absolute;margin-top:33px;"><ul class="countryList" style="display:none;"><li class="countryLi"><div class="itemFlag" style="background-position: -224px -121px;"></div><div class="itemName">Россия</div><div class="itemCode">+7</div><div class="clearBoth"></div></li><li class="countryLi"><div class="itemFlag" style="background-position: -208px -44px;"></div><div class="itemName">Грузия</div><div class="itemCode">+9955</div><div class="clearBoth"></div></li><li class="countryLi"><div class="itemFlag" style="background-position: -192px -110px;"></div><div class="itemName">Панама</div><div class="itemCode">+507</div><div class="clearBoth"></div></li><li class="countryLi"><div class="itemFlag" style="background-position: -176px -44px";></div><div class="itemName">Великобритания</div><div class="itemCode">+44</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -176px -143px;"></div><div class="itemName">Таджикистан</div><div class="itemCode">+992</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -80px -88px;"></div><div class="itemName">Литва</div><div class="itemCode">+370</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -96px -66px;"></div><div class="itemName">Израиль</div><div class="itemCode">+972</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -48px -77px;"></div><div class="itemName">Кыргызстан</div><div class="itemCode">+996</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -96px -154px;"></div><div class="itemName">Украина</div><div class="itemCode">+380</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -16px -165px;"></div><div class="itemName">Вьетнам</div><div class="itemCode">+84</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -16px -154px;"></div><div class="itemName">Турция</div><div class="itemCode">+90</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -240px 0;"></div><div class="itemName">Азербайджан</div><div class="itemCode">+994</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -112px 0;"></div><div class="itemName">Армения</div><div class="itemCode">+374</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -112px -88px;"></div><div class="itemName">Латвия</div><div class="itemCode">+371</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -128px -66px;"></div><div class="itemName">Индия</div><div class="itemCode">+91</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -160px -143px;"></div><div class="itemName">Таиланд</div><div class="itemCode">+66</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -176px -88px;"></div><div class="itemName">Молдавия</div><div class="itemCode">+373</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -144px -154px;"></div><div class="itemName">США</div><div class="itemCode">+1</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -16px -77px;"></div><div class="itemName">Япония</div><div class="itemCode">+81</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -176px -154px;"></div><div class="itemName">Узбекистан</div><div class="itemCode">+998</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -144px -77px";></div><div class="itemName">Южная Корея</div><div class="itemCode">+82</div><div class="clearBoth"></div></li><li class="countryLi"> <div class="itemFlag" style="background-position: -208px -77px;"></div><div class="itemName">Казахстан</div><div class="itemCode">+77</div><div class="clearBoth"></div></li></ul></div><input type="text" style="padding-left:41px;width:104px;" class="reg155" onKeyUp="schetsummchange1();" /><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR:</span></div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;15 000 RUR<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Особенность сервиса QIWI-кошелек состоит в том, что оплата может производиться как наличными в сети платежных терминалов QIWI, так и через интернет-сервис и приложение для мобильных устройств.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Яндекс.Деньги</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p4-4.png?7" /></div><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Яндекс.Деньги — это платежная система, с помощью которой можно мгновенно,без комиссий и очередей приобретать товары и услуги через интернет.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через WebMoney</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p5-4.png?7" /></div><div class="reg17">Тип кошелька:</div><select class="reg155" style="float:left;width:154px;height:20px;margin-top:13px;font-size:11px;line-height:17px;"><option>WMZ</option><option>WMR</option><option>WME</option></select><span style="float:left;width:700px;"></span><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;0.8% - комиссия системы<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">WebMoney — это универсальное средство для расчетов в Сети, целая среда финансовых взаимоотношений, которой сегодня пользуются миллионы людей по всему миру.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Moneta.ru</b></span><br /><br /><br /><div class="hideplata" style="min-height:90px;height:auto;"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p6-4.png?7" /></div><div class="reg17">Идентификатор:</div><select class="reg155" style="float:left;width:154px;height:20px;margin-top:13px;font-size:11px;line-height:17px;" onchange="identif2();"><option>Moneta.ru</option><option>Webmoney</option><option>Яндекс.Деньги</option></select><span style="float:left;width:700px;"></span><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="display:none;">Номер кошелька:</div><input type="text" class="reg155"  style="display:none;" onKeyUp="schetsummchange1();" /><span class="reg16" style="display:none;"></span><span style="float:left;width:700px;display:none;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Moneta.ru - это электронная платежная система для зарегистрированных пользователей, с широким выбором способов пополнения и вывода средств.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через MasterCard / VISA by Skrill</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p7-4.png?7" /></div><div class="reg17">E-mail:</div><input type="text" class="reg155"  onKeyUp="schetsummchange1();" /><select class="reg291" style="display:none;"><option>USD</option><option>EUR</option></select><div style="float:left;width:702px;height:2px;"></div><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Skrill – это безопасный способ оплаты, который позволяет приобретать товары по всему миру, не раскрывая личных финансовых данных. Указав лишь адрес электронной почты, вы можете совершать покупки в 200 странах мира, используя более 100 вариантов оплаты, в том числе посредством всех основных кредитных и дебетовых карт.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через МТС</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p8-4.png?7" /></div><div class="reg17">Номер телефона:<span style="float:right;margin-right:3px;">+7</span></div><input type="text" class="reg155"  onKeyUp="schetsummchange1();" /><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR:</span></div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;не более 5-ти платежей в сутки, не более 30 000 руб. в сутки, не более 40 000 руб. в месяц (с одного номера)<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;8%<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Мобильные платежи предоставляют  возможность моментально пополнить свой счет при помощи отправки SMS-сообщения с номера мобильного оператора Билайн, МТС и МегаФон.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Билайн</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p9-4.png?7" /></div><div class="reg17">Номер телефона:<span style="float:right;margin-right:3px;">+7</span></div><input type="text" class="reg155"  onKeyUp="schetsummchange1();" /><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR:</span></div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;не более 30 000 рублей в сутки, не более 30 000 рублей в месяц (с одного номера)<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;8%(с 01.05.2013 с абонентов Билайн будет взыматься комиссия 12% по решению оператора связи Билайн)<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Мобильные платежи предоставляют  возможность моментально пополнить свой счет при помощи отправки SMS-сообщения с номера мобильного оператора Билайн, МТС и МегаФон.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Мегафон</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p10-4.png?7" /></div><div class="reg17">Номер телефона:<span style="float:right;margin-right:3px;">+7</span></div><input type="text" class="reg155"  onKeyUp="schetsummchange1();" /><span class="reg16"></span><span style="float:left;width:700px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR:</span></div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;не более 15000 руб. в сутки, не более 40000 руб. в месяц (с одного номера)<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;8%<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Мобильные платежи предоставляют  возможность моментально пополнить свой счет при помощи отправки SMS-сообщения с номера мобильного оператора Билайн, МТС и МегаФон.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через LiqPay</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p11-4.png?7" /></div><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">LiqPay – это универсальная платежная платформа, веб-интерфейс для ввода реквизитов платежа в сети интернет и инициирования перевода денежных средств. Сервис моментальных платежей LiqPay дает возможность совершать моментальные выплаты с использованием банковских карт Visa и MasterCard. Для регистрации в LiqPay не требуется заводить отдельный аккаунт и запоминать пароль. Счет LiqPay — это номер вашего мобильного телефона, а подтверждение платежа производится через sms.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Пункты приема ставок</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p12-4.png?7" /></div><div style="display:none"><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;100 RUR<br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;рубли<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">БК Winline предлагает удобный способ пополнения и вывода средств в Пунктах приема ставок.<BR/>Для проведения  операции по внесению денежных средств необходимо знать <span style="color:#E97323">номер логина</span> в БК WinLine.</div></div><div id="PPSvvod" style="float:left;width:702px;"></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Терминалы Свободная касса</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p13-4.png?7" /></div><div style="display:none"><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Группа компаний «Свободная касса» обладает собственным процессингом и сетью платежных терминалов самообслуживания, которая насчитывает более 2000 терминалов во всех крупных городах России. Терминалы можно найти во многих магазинах, а также в отделениях «Почты России».<br /><br />Для пополнения счета через терминал, необходимо выбрать раздел «Другие услуги», найти логотип БК Winline, следовать инструкциям терминала по вводу денег, получить чек.  </div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Терминалы Comepay</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p14-4.png?7" /></div><div style="display:none"><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">В сеть платежных терминалов Comepay входит более 25000 платежных терминалов, которые  расположены в 71 регионе России, на Украине и в Казахстане, как в мегаполисах, так и в небольших населенных пунктах и удаленных от них районах. Терминалы можно найти во многих магазинах, в том числе в салонах «Связной».<br /><br />Для пополнения счета через терминал, необходимо выбрать раздел «Другие услуги», найти логотип БК Winline, следовать инструкциям терминала по вводу денег, получить чек.  </div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Терминалы Связной</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p15-4.png?7" /></div><div style="display:none"><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;1%<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">«Связной» — федеральная розничная сеть, специализирующаяся на продаже услуг сотовых операторов, персональных средств связи, аксессуаров, портативной цифровой аудио- и фототехники. Пополнить игровой счет можно как в терминале оплаты, так и наличными в кассе любого салона-магазина «Связной». Посмотреть адреса.<br /><br />Для пополнения счета через терминал, необходимо выбрать раздел «Развлечения», найти логотип БК WinLine, следовать инструкциям терминала по вводу денег, получить чек. Услугу так же можно найти по поиску.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Contact</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p16-4.png?7" /></div><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">500 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Contact – международная система денежных переводов  и платежей по всему миру. Посмотреть пункты приема платежей на <a href="http://www.contact-sys.com/where/list/0/map/0/6676/" target="_blank">карте</a>. Для оплаты необходимо назвать кассиру номер платежа и совершить  платеж.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Rapida</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p17-4.png?7" /></div><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Рапида – система денежных переводов  и платежей . ООО НКО «Рапида» сотрудничает с Почтой России, крупнейшими российскими и иностранными банками, розничными торговыми сетями и торгово-сервисными предприятиями. Для оплаты необходимо назвать кассиру номер платежа и совершить платеж.</div></div></div><div class="schet1"><div style="float:left;width:700px;font-size:14px;"><span style="font-size:18px;"><b>Пополнение счета через Евросеть</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p18-4.png?7" /></div><span style="float:left;width:700px;height:35px;"></span><div class="reg17" style="font-size:18px;">Сумма&nbsp;<span class="reg18">RUR</span>:</div><input type="text" class="reg15"  onKeyUp="schetsummchange1();" onKeyPress="return summapress(event);"/><div class="perevod1"><div class="perevod2" onclick="sendformmoney1(this);">Пополнить&nbsp;&nbsp;&nbsp;</div></div></div><b>Минимальная сумма пополнения:</b>&nbsp;<span class="min">300 RUR</span><br/><b>Максимальная сумма пополнения:</b>&nbsp;без ограничений<br /><b>Время выполнения запроса:</b>&nbsp;мгновенно<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Средства принимаются в валюте:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Евросеть предоставляет сервис по приему платежей наличными средствами через кассы в салонах и терминалах оплаты своей сети магазинов. Для оплаты необходимо выбрать удобный для Вас салон-магазин Евросеть, назвать кассиру номер платежа и сделать платеж.</div></div></div><div class="schet2" style="font-size:14px;"><b>Вывод денежных средств с игрового счета БК WinLine возможно следующими способами:</b><br /><br /><li style="display:none;">Наличными в пунктах приема ставок БК WinLine.</li><li>C помощью платежных систем - VISA, MasterCard, QIWI, WebMoney, Яндекс.Деньги, Moneta.ru, Skrill.</li><div style="float:left;height:40px;width:702px;"></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Вывод средств через Банковские карты</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p1-4.png?7" /></div><div class="reg27">Номер карты:</div><select class="reg250" style="line-height:17px;height:auto;margin-top:14px;width:153px;" onchange="vmcch();"/></select><select class="reg29" style="width:90px;" disabled="disabled"><option>VISA</option><option>MasterCard</option></select><span class="reg26" style="display:none;"></span><div style="float:left;width:702px;"></div><div class="reg27" style="display:none;">Номер карты:</div><input type="text" class="reg251" onKeyUp="schetsummchange2();" style="display:none;"/><span class="reg26" style="display:none;"></span><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">1500 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;до 7 рабочих дней<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false"><span style="float:left;">Банковские карты MasterCard - это удобный способ расчетов за товары и услуги, которым пользуются миллионы людей по всему миру. Сегодня достаточно большое количество российских банков являются эмитентами карт MasterCard.</span><img style="float:left;margin-top:20px;" src="/resources/images/vosk.png?7"><span style="color:#E97323;margin-top:20px;float:left;width:620px;margin-left:5px;">Вывод денежных средств возможен только на карты российских банков-эмитентов, с коротых был был осуществлен ввод.</span></div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Вывод средств через VISA</b></span><br /><br /><br /><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;до 7 рабочих дней<br /><b>Комиссия:</b>&nbsp;отсутвует<br /><b>Валюта транзакции:</b>&nbsp;RUR<br /></div><div><img style="float:left;margin-top:10px;" src="/resources/money/p1-4.png?7" /></div><div style="float:left;width:702px;"></div><img style="float:left;margin-top:20px;" src="/resources/images/vosk.png?7" /><span style="float:left;width:602px;color:#E97323;margin-top:20px; margin-left:5px;"><b>Снятие денежных средств возможно только на ту банковскую карту, которая принадлежит непосредственно клиенту и с которой уже производилось пополнение счета.</b></span><span style="float:left;width:550px;"><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</span><span style="float:left; margin-left:25px;width:682px;margin-top:20px;">Без удостоверения личности клиента никакие выплаты не осуществляются. Для вывода средств необходимо прислать  сканированную копию паспорта (всех заполненных страниц) и копию  обеих сторон банковской карты, с которой осуществлялся денежный перевод на игровой счет. На скане лицевой стороны карты должны быть видны ФИО владельца карты, банк-эмитент, а также первые 6 и последние 4 цифры номера карты, остальные цифры можно закрыть. На скане оборотной стороны - образец подписи владельца карты. CVC2/CVV2 код необходимо обязательно закрыть. Для неименных или виртуальных карт, не имеющих физического носителя, необходимо прислать копию договора на открытие карты, где будет указаны ФИО и номер карты (либо выписка операций по карте с ФИО и номером карты). Сканированные документы необходимо прислать на почту <a href="mailto:support@winlinebet.com" style="color:#F47621;text-decoration:none;">finance@winlinebet.com</a>.</span><div style="float:left;width:702px;height:10px;"></div><div class="hideplata"><div class="reg27" style="display:none;">Кошелек:</div><input type="text" class="reg250" style="display:none;"/><select class="reg29" style="display:none;"></select><span class="reg26" style="display:none;"></span><div style="float:left;width:702px;"></div><div class="reg27">Номер карты:</div><input type="text" class="reg251" onKeyUp="schetsummchange2();"/><span class="reg26"></span><div style="float:left;width:702px;"></div><div class="reg27">Сумма вывода:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><span class="reg28">RUR</span><span class="reg26"></span><div class="sneatie1"><div class="sneatie2">Заказать</div></div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через QIWI Кошелек</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p3-4.png?7"></div><div class="reg27">Номер телефона:</div><div style="width:0px;height:0px;margin-left:185px;position:absolute;margin-top:11px;"><div class="itemFlag2" onclick="cs_(&quot;countryList2&quot;)[0].style.display=&quot;block&quot;" style="background-position: -224px -121px;cursor:pointer;margin-right:5px;"></div><div style="font-size:12px;color:#000;padding-top:5px;" id="itemcode2">+7</div></div><div style="width:0px;height:0px;margin-left:180px;position:absolute;margin-top:33px;"><ul class="countryList2" style="display:none;"><li class="countryLi2"><div class="itemFlag2" style="background-position: -224px -121px;"></div><div class="itemName2">Россия</div><div class="itemCode2">+7</div><div class="clearBoth"></div></li><li class="countryLi2"><div class="itemFlag2" style="background-position: -208px -44px;"></div><div class="itemName2">Грузия</div><div class="itemCode2">+9955</div><div class="clearBoth"></div></li><li class="countryLi2"><div class="itemFlag2" style="background-position: -192px -110px;"></div><div class="itemName2">Панама</div><div class="itemCode2">+507</div><div class="clearBoth"></div></li><li class="countryLi2"><div class="itemFlag2" style="background-position: -176px -44px";></div><div class="itemName2">Великобритания</div><div class="itemCode2">+44</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -176px -143px;"></div><div class="itemName2">Таджикистан</div><div class="itemCode2">+992</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -80px -88px;"></div><div class="itemName2">Литва</div><div class="itemCode2">+370</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -96px -66px;"></div><div class="itemName2">Израиль</div><div class="itemCode2">+972</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -48px -77px;"></div><div class="itemName2">Кыргызстан</div><div class="itemCode2">+996</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -96px -154px;"></div><div class="itemName2">Украина</div><div class="itemCode2">+380</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -16px -165px;"></div><div class="itemName2">Вьетнам</div><div class="itemCode2">+84</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -16px -154px;"></div><div class="itemName2">Турция</div><div class="itemCode2">+90</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -240px 0;"></div><div class="itemName2">Азербайджан</div><div class="itemCode2">+994</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -112px 0;"></div><div class="itemName2">Армения</div><div class="itemCode2">+374</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -112px -88px;"></div><div class="itemName2">Латвия</div><div class="itemCode2">+371</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -128px -66px;"></div><div class="itemName2">Индия</div><div class="itemCode2">+91</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -160px -143px;"></div><div class="itemName2">Таиланд</div><div class="itemCode2">+66</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -176px -88px;"></div><div class="itemName2">Молдавия</div><div class="itemCode2">+373</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -144px -154px;"></div><div class="itemName2">США</div><div class="itemCode2">+1</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -16px -77px;"></div><div class="itemName2">Япония</div><div class="itemCode2">+81</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -176px -154px;"></div><div class="itemName2">Узбекистан</div><div class="itemCode2">+998</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -144px -77px";></div><div class="itemName2">Южная Корея</div><div class="itemCode2">+82</div><div class="clearBoth"></div></li><li class="countryLi2"> <div class="itemFlag2" style="background-position: -208px -77px;"></div><div class="itemName2">Казахстан</div><div class="itemCode2">+77</div><div class="clearBoth"></div></li></ul></div><input type="text" class="reg250" style="width:104px;padding-left:41px;"/><select class="reg29" style="display:none;"></select><div style="float:left;width:702px;"></div><div class="reg27" style="display:none">Номер телефона:</div><input type="text" class="reg251" style="display:none";/><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Особенность сервиса QIWI-кошелек состоит в том, что оплата может производиться как наличными в сети платежных терминалов QIWI, так и через интернет-сервис и приложение для мобильных устройств.</div></div>	<div style="float:left;width:702px;height:10px;"></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через Яндекс.Деньги</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p4-4.png?7" /></div><div class="reg27">Номер кошелька:</div><input type="text" class="reg250"/><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Яндекс.Деньги — это платежная система, с помощью которой можно мгновенно,без комиссий и очередей приобретать товары и услуги через интернет.</div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через WebMoney</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p5-4.png?7" /></div><div class="reg27">Номер кошелька:</div><input type="text" class="reg250"/><select class="reg29"><option>WMR</option><option>WMZ</option><option>WME</option></select><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;0.8%<br /><b>Валюта транзакции:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">WebMoney — это универсальное средство для расчетов в Сети, целая среда финансовых взаимоотношений, которой сегодня пользуются миллионы людей по всему миру.</div></div></div><div class="schet2"><div style="float:left;width:485px;"><span style="font-size:18px;"><b>Снятие средств через Moneta.ru</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p6-4.png?7" /></div><div class="reg27">Номер кошелька:</div><input type="text" class="reg250"/><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Moneta.ru - это электронная платежная система для зарегистрированных пользователей, с широким выбором способов пополнения и вывода средств.</div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через Skrill</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p2-4.png?7" /></div><div class="reg27">E-mail:</div><input type="text" class="reg250"/><select class="reg29"><option>USD</option><option>EUR</option></select><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Skrill – это безопасный способ оплаты, который позволяет приобретать товары по всему миру, не раскрывая личных финансовых данных. Указав лишь адрес электронной почты, вы можете совершать покупки в 200 странах мира, используя более 100 вариантов оплаты, в том числе посредством всех основных кредитных и дебетовых карт.</div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через МТС</b></span><br /><br /><br /><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div><img style="float:left;margin-top:10px;" src="/resources/money/p8-4.png?7" /></div><div style="float:left;width:702px;"></div><span style="float:left; margin-left:25px;width:682px;margin-top:20px;color:#656565;">Операторы мобильной связи -денежные переводы со счета мобильного телефона в режиме online.<br /><br />* Операция ввода с Билайн временно не поддерживается.</span><div style="float:left;width:702px;height:10px;"></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через Мегафон</b></span><br /><br /><br /><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div><img style="float:left;margin-top:10px;" src="/resources/money/p8-4.png?7" /></div><div style="float:left;width:702px;"></div><span style="float:left; margin-left:25px;width:682px;margin-top:20px;color:#656565;">Операторы мобильной связи -денежные переводы со счета мобильного телефона в режиме online.<br /><br />* Операция ввода с Билайн временно не поддерживается.</span><div style="float:left;width:702px;height:10px;"></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через МТС</b></span><br /><br /><br /><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div><img style="float:left;margin-top:10px;" src="/resources/money/p8-4.png?7" /></div><div style="float:left;width:702px;"></div><span style="float:left; margin-left:25px;width:682px;margin-top:20px;color:#656565;">Операторы мобильной связи -денежные переводы со счета мобильного телефона в режиме online.<br /><br />* Операция ввода с Билайн временно не поддерживается.</span><div style="float:left;width:702px;height:10px;"></div></div><div class="schet2"><div style="float:left;width:485px;"><span style="font-size:18px;"><b>Снятие средств через LiqPay</b></span><br /><br /><br /><div class="hideplata"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p11-4.png?7" /></div><div class="reg27">Номер кошелька:</div><input type="text" class="reg250"/><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" class="reg252" onKeyUp="schetsummchange2();" onKeyPress="return summapress(event);"/><div class="sneatie1"><div class="sneatie2">Заказать&nbsp;&nbsp;</div></div></div><b>Минимальная сумма снятия:</b>&nbsp;<span class="min2">300 RUR</span><br/><b>Время выполнения запроса:</b>&nbsp;2-3 дня<br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;RUR, EUR, USD<br /><br />Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.</div><div style="float:left;width:702px;"></div><div class="text_faq2">   <span href="#" class="ti_ttl2">Описание</span><div class="ti_text2" style="display: none;" opened="false">Moneta.ru - это электронная платежная система для зарегистрированных пользователей, с широким выбором способов пополнения и вывода средств.</div></div></div><div class="schet2"><div style="float:left;width:700px;"><span style="font-size:18px;"><b>Снятие средств через Пункты приема ставок</b></span><br /><br /><br /><div class="hideplata" style="height:150px;"><div style="position:absolute;"><img style="position:absolute;margin-left:550px;margin-top:-30px;margin-bottom:20px;" src="/resources/money/p12-4.png?7" /></div><div style="float:left;width:702px;"></div><span style="display:none;float:left;"><div style="float:left;width:702px;"></div><div class="reg27">Дата вывода:</div><select name="pvivod" style="float:left;width:154px;height:20px;margin-top:13px;font-size:11px;line-height:17px;"></select></span><div style="float:left;width:702px;"></div><div class="reg27">Документ:</div><select name="pvivod" style="float:left;width:275px;margin-top:13px;font-size:11px;line-height:17px;height:20px;"></select><div style="float:left;width:702px;"></div><div class="reg27" style="font-size:18px;">Сумма&nbsp;<span class="reg28">RUR</span>:</div><input type="text" name="pvivod" style="width:145px;float:left;margin-top:13px;height:18px;font-size:14px;font-color:#000000;" onKeyUp="schetsummchange3();" onKeyPress="return summapress(event);"/><div class="sneatie1" style="margin-bottom:0px;"><div class="sneatie3" onclick="schet2save();">Заказать&nbsp;&nbsp;</div></div><div style="float:left;width:702px;"></div><div class="reg27">Пункт приема ставок:</div><select name="pvivod" style="float:left;width:275px;margin-top:13px;font-size:11px;line-height:17px;height:20px;" onchange="ppsviv();"></select><div style="float:left;width:702px;"></div><div id="PPSTIME2" style="float:left;font-size:11px;color:#000;width:450px;margin-left:180px;margin-top:8px;">Вывод средств осуществляется не позднее 72 часов после запроса. Результат рассмотрения заявки Вы можете отслеживать в закладке <a href="/auth/plata/" style="color:#E97323;text-decoration:none;">«Мои платежи».</a></div></div><b>Минимальная сумма снятия:</b>&nbsp;100 RUR<br/><b>Максимальная сумма снятия:</b>&nbsp;без ограничений<br/><b>Время выполнения запроса:</b><span id="PPSTIME">&nbsp;до 24 часов</span><br /><b>Комиссия:</b>&nbsp;отсутствует<br /><b>Валюта транзакции:</b>&nbsp;рубли<br /></div><div style="float:left;width:702px;"></div><span style="float:left;width:702px;margin-top:20px;">Если валюта игрового счета и валюта перевода не совпадают, то сумма зачисляется по текущему внутреннему курсу обмена.<br /><br /><div class="text_faq2">   <span href="#" class="ti_ttl2">Примечания</span><div class="ti_text2" style="display: none;" opened="false"><span style="float:left;width:640px;color:#000;">БК Winline предлагает удобный способ пополнения и вывода средств в Пунктах приема ставок.<br />Для получения денежных средств необходимо заполнить заявку, и после ее одобрения, подойти в выбранный Пункт приема ставок, при себе иметь документ, удостоверяющий личность и указанный в заявке.</span><img style="float:left;margin-top:20px;" src="/resources/images/vosk.png?7" /><span style="float:left;width:602px;color:#656565;margin-top:20px; margin-left:5px;">Данные документа должны быть обязательно заполнены на странице <a href="/auth/personal/" style="color:#E97323;text-decoration:none;">«<u>Личная информация</u>»</a>, даже в случае, если вы уже присылали копию документа по почте.</span><span id="PPSTIME2" style="float:left;width:662px;margin-top:20px;color:#000;">Денежные средства доступны для снятия только после одобрения заявки. Если заявка сделана <span style="color:#E97323;">до 12:00</span> и одобрена, деньги можно получить в <span style="color:#E97323;">этот же день после 16:00</span>. В случае неполучения Вами денежных средств в течение <span style="color:#E97323;">10 дней</span>, они будут возвращены на счет.</span></div></div></div></div></div></div><div id="PLATA" style="width:744px;display:none;">        <div style="position:relative;float:left;width:744px;height:56px; margin-top:0px;background-color:#fff;">        <select id="PLATABOXOPERATION" style="position:relative;float:right;margin-right:5px;width:150px;;color:#000;margin-top:15px; background-color:#FFF;border:1px solid #7E7E7E; font-size:14px;margin-top:15px;" onchange="plataChange2();"></select>        <select id="PLATABOXDATA1" style="position:relative;float:right;margin-right:5px; width:105px;;color:#000;margin-top:15px; background-color:#FFF;border:1px solid #7E7E7E;font-size:14px;" onchange="extractPlata();"></select>        <span style="font-size:14px;color:#000;float:right;margin-right:3px;margin-top:18px;">до:</span>        <select id="PLATABOXDATA2" style="position:relative;float:right;margin-right:5px; width:105px;;color:#000;margin-top:15px; background-color:#FFF;border:1px solid #7E7E7E;font-size:14px;"        onchange="extractPlata();"></select>        <span style="font-size:14px;color:#000;float:right;margin-right:3px;margin-top:18px;">от:</span>        </div>        <div class="cham01" style="float:left;font-size:12px;color:#FFF;width:744px; font-weight:bold;">        <div style="float:left;width:87px;border-right:1px solid #434343;height:31px;overflow:hidden;text-align:center;"><div class="padd">Дата</div></div>        <div style="float:left; margin-left:0px; width:132px;border-right:1px solid #434343;height:31px;overflow:hidden;text-align:center;"><div class="padd">Вид операции</div></div><div style="float:left; margin-left:0px; width:397px;border-right:1px solid #434343;height:31px;overflow:hidden;text-align:center;"><div class="padd">Система</div></div>        <div style="float:left;width:110px;height:31px;overflow:hidden;text-align:center;"><div class="padd">Сумма</div></div></div>        <div id="INNERPLATA" style="float:left;font-size:11px;color:#000000;width:742px;"></div></div></div>';                


function script(){
document.getElementById("fff").innerHTML="";
el=document.createElement('script');
el.setAttribute('src',src+"?"+Math.round(Math.random()*2000));
el.setAttribute('type','text/javascript');
document.getElementById("fff").appendChild(el);
return;}


function Response15(Request){ipadres=Request.responseText;if(ipadres.length>30)ipadres="badipaddress";return;}

function showpp(){id_('RECH').style.display='';};

function Close(string){
if(flashtime!=0){
if(new Date().getTime()-flashtime<5000) return;}
flashtime=new Date().getTime();
//alert(string);
EmailCod=window.location.hash;
EmailCod=decodeURI(EmailCod.split("#").join(""));
userlogin3=userlogin;
userpass3=userpass;
//alert(userlogin3);
loginexit();
ttt2=0;nodata=0;
ttt=0;
//LoadScript('http://5.123.4.166:1065/rus.js');
if(lsc==1) Loadscript();else  LoadScript();
}





function Open(string){

userlogin=getCookie("lgn");userpass=getCookie("prl");
if(document.cookie){guid=getCookie("guid")[0];
if(!guid) guid="";} else guid="no";
//console.log("g1uid="+guid);
if(userlogin&&userpass&&userlogin.length>3&&userpass.length>5){userlogin3=userlogin;userpass3=userpass;}
if(oup==0) oup=1;
if(nodata==2) {
	webSocket.send("nodata");webSocket.send("WINLINE");
	sendindex=0;sendarray.splice(0); 
	writeUTF(guid);
	//writeUTF(inithref);
	writeUTF(document.referrer);
	sendarray[sendindex]=0;
    if(guidstate==0) webSocket.send("WINLINECOOK"); else  webSocket.send("WINLINECOOK2");
    webSocket.send(EncodeBase64_2(sendarray));

  var u=inithref.split("unit=");
  if(u.length>1&&guidstate==0){
	sendindex=0;sendarray.splice(0); 
	writeUTF(u[u.length-1]);
	sendarray[sendindex]=0;
    webSocket.send("UNIT");
    webSocket.send(EncodeBase64_2(sendarray));
  }
  
  
	guidstate++;	
	

//alert("OPEN"+userlogin3);
if(userlogin3&&userlogin3.length>3&&userpass3.length>5){
sendindex=0;
sendarray.splice(0);
writeUTF(userlogin3);
writeUTF(userpass3);
writeUTF(ipadres);
userlogin=userlogin3;
userpass=userpass3;
sendarray[sendindex]=0;
webSocket.send("clientlogin");
webSocket.send(EncodeBase64_2(sendarray));
userpass3="";
userlogin3="";
}

if((EmailCod.length>3)&&(EmailCod.indexOf('{')>-1)){
sendindex=0;
sendarray.splice(0);
writeUTF(EmailCod);
sendarray[sendindex]=0;
webSocket.send("sendcodemail");
webSocket.send(EncodeBase64_2(sendarray));}

} nodata=1;


//webSocket.send("sample");ttt=0;
//webSocket.send("menu");

}  


function slideDate(){
var i=0;
var j=0;
var m=0;
var l=0;
if(bontime>0) {bontime--;
j=Math.floor(bontime/3600);
m=Math.floor((bontime-3600*j)/60); 
l=bontime-j*3600-m*60;
Bonus1000.childNodes[0].childNodes[0].innerHTML=""+zeroadd(j)+":"+zeroadd(m)+":"+zeroadd(l);

}else {if(loginstate==1) Bonus1000.childNodes[0].childNodes[0].innerHTML="";else  Bonus1000.childNodes[0].childNodes[0].innerHTML="23:59:59";}

if(ctindex==0){
date=new Date();
dif=date.getHours()-date.getUTCHours();  if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()>0)) dif=dif+24;
if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()>0)) dif=dif+24;
if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()==0)&&(date.getDate()-date.getUTCDate()>0)) dif=dif+24;
dif=(GMTBox.options[GMTBox.selectedIndex].value-dif)*60*60*1000;

date.setTime(date.getTime()+dif);




//CurrentTime=zeroadd(date.getHours())+"  "+zeroadd(date.getMinutes()); 
//CT=ctt[ct];

if((oldData!=date.getDate())&&(GMT_flag==0)&&(ttt>1)){var temp3=-1;
if(DateBox.selectedIndex>-1) temp3=DateBox.options[DateBox.selectedIndex].value;
for(i=0;i<mSport.length;i++) mSport[i].Combo.splice(0);
for(i=0;i<mCountry.length;i++) {mCountry[i].Combo.splice(0);mCountry[i].Combo2.splice(0);}
for(i=0;i<mChampionships.length;i++) mChampionships[i].Combo.splice(1);
region.Combo.splice(0);
for(i=0;i<mEvents.length;i++) setEventTime(mEvents[i]);
if(temp3>-1){for(i=0;i<DateBox.length;i++) if(DateBox.options[i].value==temp3){DateBox.selectedIndex=i;break;}
if(i==DateBox.length) DateBox.selectedIndex=0;}
DrawTable();}
oldData=date.getDate();
Timdat1=zeroadd(date.getDate())+" "+ calend[date.getMonth()]+" "+zeroadd(date.getFullYear())+" "+zeroadd(date.getHours());
Timdat2=zeroadd(date.getMinutes());
}
Tim.innerHTML=Timdat1+ctttt[ctindex%2]+Timdat2;
ctindex=(ctindex+1)%10;

;}

function unfav2(s){
if(s.indexOf("-")>-1) return s.split('-').join('+');
if(s.indexOf("+")>-1) return s.split('+').join('-');
return s;	

}


function unfav(s){
if((s=="0")||(s=="0.0")||(s=="")) return 0;	
var temp=s.split("+");
if(temp.length==3) return (parseFloatExt(temp[1])+parseFloatExt(temp[2]))/2;
if(temp.length==2) return parseFloatExt(temp[1]);
temp=s.split("-");
if(temp.length==3) return -1*(parseFloatExt(temp[1])+parseFloatExt(temp[2]))/2;
if(temp.length==2) return -1*parseFloatExt(temp[1]);
}


function untot(s){
if((s=="0")||(s=="0.0")||(s=="")) return 0;	
temp=s.split("-");
if(temp.length==2) return (parseFloatExt(temp[0])+parseFloatExt(temp[1]))/2;
if(temp.length==1) return parseFloatExt(temp[0]);
}



var grupp=new Array("Исход","Фора/Гандикап","Тотал/Голы","Счет","Угловые","Карточки","Популярные");
//var grpp=new Array(0,20000,30000,41000,53000,63000,73000,80000);
var poparray=new Array(5,10,13,16,21,22,34,36,42,43,46,51,53,75,82,84,106,107,107,127,128,212,252,254);
var grpp=new Array(0,200000,300000,400000,500000,600000,700000,800000,900000);

var timerpromo=0;



function corot(s){
if(s.length<15) return s;
if(s.indexOf(" ")==-1) return s;
var ss=s.split(" ");
if(ss[1].split(" ").join("")=="") return s;
if(ss[1].substr(0,1)!="(") return ss[0]+" "+ss[1].substr(0,1)+"";
else return ss[0];
}


function corot2(s){
if(s.length<25) return s;
if(s.indexOf(" ")==-1) return s;
var ss=s.split(" ");
if(ss[1].split(" ").join("")=="") return s;
return ss[0]+" "+ss[1].substr(0,1)+"";
}



var loc2 = 0;
var loc = ""+window.location;
if((loc.indexOf("6.win")>-1)||(loc.indexOf("4.win")>-1)) 
    loc2=1;

//loc2=1;	

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30353766-1']);
_gaq.push(['_trackPageview']);


(function() { 
    if(loc2==1) return;
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


(function (d, w, c) {if(loc2==1) return;
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter17763661 = new Ya.Metrika({id:17763661,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");


    
// $().read(function() {
        function CreateNewLikeButton() {
            var elem = $(document.createElement("fb:like"));
            elem.attr("href", $('#fblhref').attr('href'));
            // data-width="690" data-show-faces="true" style="height:30px;clear:both;" data-send="true"
            elem.attr('data-width', 690);
            elem.attr('data-show-faces', 'true');
            elem.attr('style', 'height:30px;clear:both;');
            elem.attr('data-send', 'true');
            $("div#fblhref").empty().append(elem);
            FB.XFBML.parse($("div#fblhref").get(0));
        }    
    var loadComplete = function() {

        href = location.href;
        href = href.split('#');
        
        if($.browser.msie) {
            href = href[0] + (href.length > 1 ? href[1].substring(1) : '');
        }
        else
            href = href[0];
        
 		
         if((href.indexOf("auth")==-1)&&(href.indexOf("stavki")==-1)&&(href.indexOf("plus")==-1)){
        		if(href != 'http://' + document.domain + '/') {
            showTitle(true, $('#doctitle').html());
            $('.ceo').hide();
        }     
        else {
		            showTitle(false);
            $('.ceo').show();
        }
		;}
    
        
        $('.text_faq .ti_ttl').die('click');
        $('.text_faq .ti_ttl').live('click', function() {
            $this = $(this);
            if($this.parent().find('.ti_text').attr('opened') == 'false' || $(this).parent().find('.ti_text').attr('opened') == undefined) {
                $this.addClass('opened');
                $this.parent().find('.ti_text').slideDown(function() {
                    $this.parent().find('.ti_text').attr('opened', 'true');
                });
            }
            else {
                $this.parent().find('.ti_text').slideUp(function() {
                    $this.removeClass('opened');
                    $this.parent().find('.ti_text').attr('opened', 'false');
                })
            }
            
            return false;
        });  

 if(href.indexOf("obratnaya-svyaz")>-1){cokey=generatekey(Reg10[5].previousSibling);Reg10[5].value="";Reg10[5].style.border="";}



        try {
            //hashChanged();
            drawpr(0);drawpr(1);drawpr(2);drawpr(3);drawpr(4);drawpr(5);
    	
		        } catch(e) { out(e); }
				
        
        timer = 0;
        $('.actions .thumb span').click(function() {
			if(timerpromo!=2)  timerpromo=1;
						
            $('.actions .thumb span.selected').removeClass('selected');
            $('.actions .big a').remove();
            $('.actions .big').append('<a href="' + $(this).attr('href') + '"><img height="240px" src="' + $(this).attr('image') + '" /></a>');
            $(this).addClass('selected');

            iternews=$(this).index() + 1;
			insertkoef($(this).index() + 1);
			 $('.actions .big a').bind('click', ajaxLoad);

            if(timer > 0)
                clearTimeout(timer);
            
			if(timerpromo!=1){
            timer = setTimeout(function() {
                iternews ++;
                if(iternews > 9)
                    iternews = 1;
               timerpromo=2; $('.actions .thumb span:eq(' + (iternews-1) + ')').click();timerpromo=0;
            }, 15000);}
            
            return false;
        });
        
        $('.actions .thumb span:eq(0)').click();
        
		timer = setTimeout(function() {
            iternews ++;
            if(iternews > 5)
                iternews = 1;
          timerpromo=2; $('.actions .thumb span:eq(' + (iternews-1) + ')').click();timerpromo=0;
        }, 15000);
        
        $('a').unbind('click');
        $('a').bind('click', ajaxLoad);

		CreateNewLikeButton();
         
    }
    

var loadPage2=function(href) {
var i=0;
var j=0;
var l=0;

if((decodeURI(href).indexOf("sport")==-1)&&(decodeURI(href).indexOf("plus")==-1)) return;
var sp=decodeURI(href).replace("//","").replace("/stavki","").split("/");
if(!sp[1]) return;
window.currentAjax ? window.currentAjax.abort() : false;
//showTitle(false);
if(sp[1]=="plus"){
if(!sp[2]) return;
l=parseInt(sp[2]);
if(!mEvents[EventId[l]]) return; 
hideall();
window.scrollTo(0,0);plus(l);
if(ttt>3) return;
if((sp[3])&&(sp[3]=="line")&&(sp[4])&&(sp[5])&&(sp[5])) {lineclick1(sp[6]+"#"+sp[4]+"#"+sp[5],0);}
return;
}

if(sp[1]!="sport") return;
if(!sp[2]) return;
if(sp[2]=="live") {liveclick(0);return;}
if(sp[2]=="favorites") {favoritclick(0);return;}
if(sp[2]==transliterate("матчи по ТВ")) {tvclick(0);return;}
if((sp[2]==transliterate("ближайшие ставки"))&&(sp[3])&&((sp[3]=="2")||(sp[3]=="4")||(sp[3]=="6"))) {bltclick(parseInt(sp[3]),0);return;}
sp[2]=transliterate(sp[2],true);
for(i=0;i<mSport.length;i++) if(mSport[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[2]) break;
if(i==mSport.length) return;
//else SportIndex=i;
if(!sp[3]) {SportClick2(i,0);return; }

if(sp[3]==transliterate("регионы")){
j=i;	
if(mSport[i].ID_SPORT!=1) return;	
if(!sp[4]){RegionIndex=-1; SportIndex=1;RegionClick(0);return;}
sp[4]=transliterate(sp[4],true);
for(i=0;i<mCountry.length;i++) if((mCountry[i].ID_SPORT==1)&&(mCountry[i].IS_REGION==0)&&(mCountry[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[4])) break;
if(i==mCountry.length) {RegionIndex=-1;SportIndex=1; RegionClick(0);return;}
if(!sp[5]){CountryClick2(i,0);return;}
l=i;
sp[5]=transliterate(sp[5],true);
for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_COUNTRY==mCountry[l].ID_COUNTRY)&&(mChampionships[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[5])) break;
if(i==mChampionships.length) {CountryClick2(l,0);return;}
ChampionClick2(mChampionships[i].ID_CHAMPIONSHIP,0);return;
}

j=i;
sp[3]=transliterate(sp[3],true);

for(i=0;i<mCountry.length;i++) if((mCountry[i].ID_SPORT==mSport[j].ID_SPORT)&&(mCountry[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[3])) break;
if(i==mCountry.length) {SportClick2(j,0);return;}
if(!sp[4]){CountryClick2(i,0);return;}
l=i;
sp[4]=transliterate(sp[4],true);
for(i=0;i<mChampionships.length;i++) if((mChampionships[i].ID_COUNTRY==mCountry[l].ID_COUNTRY)&&(mChampionships[i].NAME_RUS.toLowerCase().split(",").join("").split("(").join("").split(")").join("")==sp[4])) break;
if(i==mChampionships.length) {CountryClick2(l,0);return;}
ChampionClick2(mChampionships[i].ID_CHAMPIONSHIP,0);return;
      
}


	window.currentAjax = null;	
    var loadPage = function(href, tohistory) {  
	    if(tohistory == true) {
            if($.browser.msie) {
                location.href = '#' + href;
            }
            else {
                
				history.pushState({href: href, title: document.title}, document.title, href);
            }
        }
            
        if(href.search(/\?/) >=0)
            href = href + '&ajax=true';
        else
            href = href + '?ajax=true';
		
        if(window.currentAjax) window.currentAjax.abort();
        window.currentAjax = $.get(href, function(data) {
		    /*var pos1 = data.search(/<body>/);
            data = data.substr(pos1 + 6);
            var pos2 = data.search(/<\/body>/);
            data = data.substr(0, pos2);*/


            $('#ajax-content').html(data);
			
						
//			if(href.indexOf("o-nas/obratnaya-svyaz/">-1)){cokey=generatekey(Reg10[5].previousSibling);Reg10[5].value="";Reg10[5].style.border="";}
			
            
            /*setTimeout(function() {
                if(location.href != 'http://' + document.domain + '/') {
                    $('#BACK').show();
                    $('#BACK').find('span').html($('#doctitle').html());
                }
                else {
                    $('#BACK').hide();
                }
            }, 200);*/
            
            loadComplete();
/*			
		if(id_("ACTION2")&&window.location.href.indexOf("novosti/390.html")>-1){
			var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:11px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+id_("ACTION2").innerHTML;
id_("ACTION2").innerHTML=string;timerkfunc();
timerk=setInterval(timerkfunc,1000);			
			}
			
var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));			

if(window.location.href.indexOf("novosti/?page")>-1||page2=="/novosti/"){
for(i=0;i<cs_("info").length;i++) if(cs_("info")[i].innerHTML.indexOf("КЕРЖА")>-1){	
var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:6px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+cs_("info")[i].innerHTML;
cs_("info")[i].innerHTML=string; timerkfunc();
timerk=setInterval(timerkfunc,1000);break;}			
}
*/

			
            
        });
        
    }
    
    if(window.addEventListener) {
        
        window.addEventListener("popstate", function(e) {
		   hrefcount++;
		   if((hrefcount==1)&&(inithref=window.location.href)) return;
		   var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
		   if(page2=='/stavki/sport/') {hashChanged('stavki');return;}
		   loadPage2(window.location.href);
		   if(window.location.href.indexOf("sport")>-1) return;
		   if(window.location.href.indexOf("plus")>-1) return;
		   if(page2.replace("/","")=="") {hashChanged("");loadPage("", false);return;}
           if(page2.indexOf("auth")>-1) {hashChanged(page2.replace(/\/auth\//, '#'));return;}
		   hashChanged("");
		   			
			   if(e.state && e.state.href) {
                var page = e.state.href;
               loadPage(e.state.href, false);
            }  else  loadPage("", false);
			
        }, false);
        
        window.addEventListener("hashchange", function() {
			 hashChanged(window.location.hash.replace(/\/auth\//, ''));
			 if(window.location.hash.indexOf("sport")>-1) return;
			 if(window.location.hash.indexOf("plus")>-1) return;
			 if(window.location.hash.indexOf("auth")>-1) return;
	 
//            if(location.hash.indexOf("sports")>-1) return;
//			if(location.hash.indexOf("plus")>-1) return;


            var page = location.hash.replace(/#/, '');
            if(page != window.currentPage)
			         loadPage(page);
                
        }, false);
    }
    
    var ajaxLoad = function() { 
        if($(this).attr('onclick')) {
            return false;    
        }
        
        var href = $(this).attr('href');
		if(href.search('http') >= 0) {
            return true;
        }
        
        if(href.search(/auth/) >= 0) {
            var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
			if(page2!=href){ 
			// alert(href.replace(/\/auth\//, '#'));
            if($.browser.msie) {
                location.href = '#' + href;
            }
            else {
             			 history.pushState({href: href, title: document.title}, document.title, href);
            };
            href = href.replace(/\/auth\//, '#');
            hashChanged(href);}
            return false;
        }
    
        hashChanged(href.replace(/\/auth\//, '#'));
        
        
        if(href.search(/#/) == 0) {
           $('#BACK').show();
            return true;
        }

        loadPage(href, true);
        return false;
    };
    
    $('a').bind('click', ajaxLoad);

    IndexScroll = null;
    mPrincipal = null;
    DI=null;
    cookierefresh=0;
    bonuskoef=1;
    bonusprocent=new Array();
    bonpr=0;
	bonprDay=0;
	bonprDayLive=0;


    FORM='';
    bontime=0;
    bonusnew=0; 
    bonusnewindex=0;
    bonusnewkoef=1.7;
    bonusnewstate=0;
	sendinner=0;
    curarray=new Array(12,2,2,3,4,5,6,12,12,12,12,12,12,12,12,12,12,12);
	openmoney=new Array("","VISA Card","MasterCard","QIWI Кошелек","Яндекс.Деньги","Webmoney","Moneta.ru","МТС","Билайн","Мегафон");
    aric=new Array(1015,1017,1020);
    sendinner=0;
		
	curopen=0;
    for11=0;
    OLIMP=0;
    demokey=0;
    demokey2=0;
    regkey=0;
    regkey2=0;
    cokey=0;
    rem1key=0;
    rem2key=0;
	SKR=id_("skr");
	War=document.getElementsByName("WAR");
    Tim=id_("TIMER");
    Body=id_("BODY");
    Msh=id_("MSH");
    Msh2=id_("MSH2");
    Opencupon=id_("OPEN");
                                                                                              
    Hide=id_("HIDE");
	Hu=id_("HU");
    War=cs_("WAR");
	Scaut1=cs_("scaut1");
	Scaut0=cs_("scaut");
	Minut0=cs_("minut0");
	
    Open4=cs_("open4");
	Rosmenu2=cs_("rosmenu");
	Rosmenu=new Array();
	for(i=0;i<Rosmenu2.length;i++)Rosmenu[i]=Rosmenu2[i];
	Kabmenu2=cs_("kabmenu");
	Kabmenu=new Array();
	for(i=0;i<Kabmenu2.length;i++)Kabmenu[i]=Kabmenu2[i];
	
    countryli=cs_("countryLi");
	itemcode=cs_("itemCode");
	for(i=0;i<countryli.length;i++){countryli[i].index=i;countryli[i].onclick=countryliclick;}

    countryli2=cs_("countryLi2");
	itemcode2=cs_("itemCode2");
	for(i=0;i<countryli2.length;i++){countryli2[i].index=i;countryli2[i].onclick=countryliclick2;}
	   

    Rosmenu2=cs_("plusmenu");
	Plusmenu=new Array();
	for(i=0;i<Rosmenu2.length;i++)Plusmenu[i]=Rosmenu2[i];
	

    Rosmenu2=cs_("pluslargemenu");
	Pluslargemenu=new Array();
	for(i=0;i<Rosmenu2.length;i++)Pluslargemenu[i]=Rosmenu2[i];
		
	
	Rosmenu[0].setAttribute("class", "rosmenu2");
	Plusmenu[0].setAttribute("class", "rosmenu2");
	Pluslargemenu[0].setAttribute("class", "rosmenu2");
	
    for(i=0;i<Rosmenu.length;i++) {Rosmenu[i].index=i;Rosmenu[i].onclick=rosclick;}
	for(i=0;i<Plusmenu.length;i++) {Plusmenu[i].index=i;Plusmenu[i].onclick=rosclick1;}
		for(i=0;i<Pluslargemenu.length;i++) {Pluslargemenu[i].index=i;Pluslargemenu[i].onclick=rosclick2;}
	
	rosstate=0;plusstate=0;pluslargestate=0;		
		
	
    //Openschet=cs_("openschet");
	var War=cs_("WAR");
    Open3=cs_("open3");
	opstate=0;
	


    
    Minpop=cs_("min");
    Minpop2=cs_("min2");
    Linia=id_("LINIA");
    Cuponslide=id_("CUPONSLIDE");
	Cuponslide2=id_("CUPONSLIDE2");
    Cupon=id_("CUPON");
	CuponDay=id_("CUPON2");
	CuponDayLive=id_("CUPON3");
    Left1=id_("LEFT1");
    
    Left11=id_("LEFT11");
    Left22=id_("LEFT22");
    cuinterval=null;
	cuinterval2=null;
    Liniaex=id_("LINIAEX");
    Promo=id_("PROMO");
    Ppsvvod=id_("PPSvvod");
    Pvivod=document.getElementsByName("pvivod");
	Xlop=document.getElementsByName("xlop");
	for(i=0;i<Xlop.length;i++) {Xlop[i].index=i;Xlop[i].onclick=xlopus;}
		
	Urok=getElementsByName("div","urok");
    Shar=cs_("shar");
    for(i=0;i<Shar.length;i++) {Shar[i].index=i;Shar[i].onclick=sharclick;}

    Tlin=getElementsByName("span","TLIN");
    Rlin=getElementsByName("span","RLIN")
    Vin=getElementsByName("span","VIN");
    Lt=getElementsByName("div","LT");
    Prtable=id_("PRTABLE");
    Prtable1=id_("PRTABLE1");
    Prtable2=id_("PRTABLE2");
    Prtable3=id_("PRTABLE3");
    Prtable4=id_("PRTABLE4");
	Prtable4=id_("PRTABLE5");
	
	
    Schet=id_("SCHET");
    Scan=id_("SCAN");
    Familia=id_("FAMILIA");
    Titles=id_("TITLE");

    Bonus1000=id_("BONUS1000");
	Regfinal=id_("REGFINAL");
	NYbonus=id_("NYBONUS");

    Virtual=id_("VIRTUAL");
    Rules2=cs_("ti_ttl2");
    Rulesin2=cs_("ti_text2");

    Submenu=cs_("submenu");



    Fam1=id_("FAM1");
    Fam2=id_("FAM2");
    Fam3=id_("FAM3");
    Fam4=id_("FAM4");
    Fam5=id_("FAM5");
    Reg7=cs_("reg7");
    Reg10=cs_("reg10");
    Reg18=cs_("reg18");
    Reg28=cs_("reg28");


    Filtru=id_("FILTRU");
	Sportmenu=id_("SportMenu");
	Filtru1=id_("Filtru1");
    Rem2Button=id_("REM2BUTTON");
    Rem3Button=id_("REM3BUTTON");
    Rem1=document.getElementsByName("rem1");
    Rem2=document.getElementsByName("rem2");
    Remember1=id_("REMEMBER1");
    Remember2=id_("REMEMBER2");
    Regcheck=id_("regcheck");
    Regcheck2=id_("CHECKOPEN2");
    Login=id_("login");
    Register=id_("REGISTER");
    Reg4=cs_("reg4");
	Password=id_("password");
    Table=id_("TABLE");
    Render=id_("RENDER");
    Logged=id_("logged");
    Unlogged=id_("unlogged");
    Plus=id_("PLUS");
    GMTBox=id_("GMT");
	ELBox=id_("ELINE");
    DateBox=id_("DATEBOX");
    BltBox=id_("SORTCHAMPION");
    IstoriaBox=id_("ISTORIABOX");
    IstoriaBoxData=id_("ISTORIABOXDATA");
    Istoria=id_("INNERHISTORY");
    History=id_("HISTORY");

    Result=id_("RESULT");
    InnerResult=id_("INNERRESULT");
    ResultBoxChamp=id_("RESULTBOXCHAMP");
    ResultBoxSport=id_("RESULTBOXSPORT");
    ResultBoxData=id_("RESULTBOXDATA");

    Plata=id_("PLATA");
    InnerPlata=id_("INNERPLATA");
    PlataBoxOperation=id_("PLATABOXOPERATION");
    PlataBoxData1=id_("PLATABOXDATA1");
    PlataBoxData2=id_("PLATABOXDATA2");


    table=getElementsByName("div","table_t");
	table_=getElementsByName("div","table_te")[0];



    LiveButton=id_("LIVE");
    FavoritButton=id_("FAVORIT");
    TvButton=id_("TV");
    Pluslarge=id_("PLUSLARGE");
    Plus=id_("PLUS");
    Rospis=id_("ROSPIS");



    CuponBet=id_("CUPONBET");
    //cuponshape=id_("Cuponshape");
    cuponbalance=id_("CUPONBALANCE");

    expressButton=id_("Express0");
    ordinarButton=id_("Ordinar0");
    systemButton=id_("System0");

    сuponstake=id_("CUPONSTAKE");
    expor1=id_("Expor1");
    express2=id_("Express2");
	expressDay2=id_("Express22");
	expressDay3=id_("Express33");


    systo1=id_("SYSTO1");
    soho2=id_("SOHO2");
	

    ordinar=id_("ORDINAR");
    express=id_("EXPRESS");
    system=id_("SYSTEM");

    Viplata=id_("Summ4");//ВЫПЛАТА ПО СТАВК
    minimum=id_("Summ5");//МИНИМУМ ДЛЯ САВКИ
    maximum=id_("Summ6");//Максимум ДЛЯ САВКИ
    
	Viplata2=id_("Summ44");//ВЫПЛАТА ПО СТАВК
	minimum2=id_("Summ55");//МИНИМУМ ДЛЯ САВКИ
    maximum2=id_("Summ66");//Максимум ДЛЯ САВКИ
	
	ViplataDay=id_("Summ42");//ВЫПЛАТА ПО СТАВК
    minimumDay=id_("Summ52");//МИНИМУМ ДЛЯ САВКИ
    maximumDay=id_("Summ62");//Максимум ДЛЯ САВКИ
	
	ViplataDayLive=id_("Summ43");//ВЫПЛАТА ПО СТАВК
    minimumDayLive=id_("Summ53");//МИНИМУМ ДЛЯ САВКИ
    maximumDayLive=id_("Summ63");//Максимум ДЛЯ САВКИ

	
	

    summ7=id_("Summ7");//Максимум ДЛЯ САВКИ
    Otkat=id_("OTKAT");
	summ7Day=id_("Summ72");//Максимум ДЛЯ САВКИ
    OtkatDay=id_("OTKAT2");
	summ7DayLive=id_("Summ73");//Максимум ДЛЯ САВКИ
    OtkatDayLive=id_("OTKAT3");
		

	minpar=id_("MINIMUM");
    maxpar=id_("MAXIMUM");
    minpar2=id_("MINIMUM2");
    maxpar2=id_("MAXIMUM2");

    сuponsumma=id_("CUPONSUMMA");//СУММА RUR
	сuponsummaDay=id_("CUPONSUMMA2");//СУММА RUR
	сuponsummaDayLive=id_("CUPONSUMMA3");//СУММА RUR
    summainput=id_("SUMMAINPUT");//введенные пользователем сумма
	summainputDay=id_("SUMMAINPUT2");//введенные пользователем сумма
	summainputDayLive=id_("SUMMAINPUT3");//введенные пользователем сумма
	summainputDay.value=300;
	summainputDayLive.value=300;
    sfocus=0;

    stavcaButton=id_("STAVCABUTTON");//кнопка нажатия ставки
    checkbet=id_("CHECKBET");//галочка с любым коеффициентом
	checkrapid=id_("CHECKRAPID");//галочка с любым коеффициентом
	stavcaButtonDay=id_("STAVCABUTTON2");//кнопка нажатия ставки
	stavcaButtonDayLive=id_("STAVCABUTTON3");//кнопка нажатия ставки

    //summ4=id_("Summ4");//выплата
    //summ5=id_("Summ5");//миним
    //summ6=id_("Summ6");//макс



    expressflag=3;
	ordinarflag=0;
    lastexpressflag=0;
	rapidcheck=0;
     


    schet_current1=0;
    schet_current2=0;

    Money1=cs_("money1");
    Schet1=cs_("schet1");
   
	
	
    Money2=cs_("money2");
    Schet2=cs_("schet2");





    Reg15=cs_("reg15");
	Reg155=cs_("reg155");
	Reg250=cs_("reg250");
    Reg251=cs_("reg251");
    Reg252=cs_("reg252");
    Reg29=cs_("reg29");
    Reg291=cs_("reg291");
    Perevod=cs_("perevod2");
	Sneatie=cs_("sneatie2");

    //Hideplata=document.getElementsByName("hideplata");
    Hideplata=getElementsByName("div","hideplata");

    order="";
    hesh="";
    paysystem=new Array("","","MVCRFB","WM","PM","ZP","LP","MB","LR","RBKM","MPYM","QIWI","MIGPAY","MPMC","","")
    paysystem2=new Array("","MVCRFB","WM","LR","RBKM","MPYM","QIWI","MPMC","MPMC","MPMC");
    paysumm=0;
    paysumm2=0;
    paysys=new String();


    Vvod=id_("VVOD");
    Vivod=id_("VIVOD");

    Vvodico=id_("VVODICO");
    Vivodico=id_("VIVODICO");

    if(Vivodico) Vivodico.style.display="none";

    monevvod=new  Array(1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1);
    monevivod=new Array(1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0);
	crdarray=new Array();
	
	moneconvert=new Array(0,2,7,3,4,5,6,1,8,8,8,13,0,0,0,0,14,15,16);

   for(i=0;i<Sneatie.length;i++){Sneatie[i].onmousedown=sneatiedown;Sneatie[i].onmouseup=sneatieup;}
   for(i=0;i<Perevod.length;i++){Perevod[i].onmousedown=sneatiedown;Perevod[i].onmouseup=sneatieup;}

for(i=0;i<Schet2.length;i++) Schet2[i].style.display="none";
for(i=0;i<Schet1.length;i++) Schet1[i].style.display="none";

Schet1[schet_current1].style.display="";

for(i=0;i<Rules2.length;i++){
Rulesin2[i].style.display="none";
Rules2[i].index=i;

Rules2[i].onclick=function(){
var j=this.index;	
if(Rulesin2[j].style.display=="none"){
Rulesin2[j].style.display="",this.style.background="url(/resources/images/cdn.png?7) 10px center no-repeat";
}
else {
Rulesin2[j].style.display="none",this.style.background="url(/resources/images/crg.png?7) 10px center no-repeat";}
 };}


	

    //BlstButton=new Array();

    GMT_flag=0;
    oldData=0;
    LIVE2=0
    demo=0;
    colorhis2=0;

    date=new Date();
    dif=date.getHours()-date.getUTCHours();  if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()>0)) dif=dif+24;
    diftime=0;

    cttt=setInterval(slideDate,1000);
    ctttt=new Array(":","&nbsp;");
    ctindex=0;
    ct1=0;
    ct2=0;
    Timdat1="";
    Timdat2="";

 port=1070;
 iphone=0;

//alert(navigator.userAgent);



if("WebSocket" in window)  port=1070; else port=80;
if(navigator.userAgent.indexOf("AppleWebKit/534")>-1) port=1062;
if(navigator.userAgent.indexOf('iPhone') != -1||navigator.userAgent.toLowerCase().indexOf('android') != -1 ) iphone=1;

if(iphone==1) {id_("CUPON4").style.display="none";id_("CUPON3").style.display="none";}


 
    documents=new Array();
    doc=new Array();
    doc2=new Array(0,0,0,0,0,0);
    doc3=new Array(0,0,0,0,0,0);
    doc[2]=new Array(0, 1, 1, 1, 1, 0);
    doc[1]=new Array(1, 1, 1, 0, 1, 1);
    doc[3]=new Array(1, 1, 1, 1, 0, 0);
    doc[4]=new Array(1, 1, 0, 0, 0, 0);
	doc[5]=new Array(1, 1, 0, 0, 0, 0);
    coboxtext=new Array("Общие вопросы","Техническая поддержка","Связи с общественностью и реклама","Партнерство","Вопросы трудоустройства и вакансий","Финансовый отдел");


    dating=new Array();
    sporting=new Array();
    sportname=new Array();
    datesport=new Array();
    sportdate=new Array();

    dateb=new Date();
    platadate=new Array();
    platatip=new Array();
    platacasa=new Array();
    platavid=new Array();
    platasumma=new Array();
    plataId=new Array();
    valutavid=new Array();
    LastEvent=new Array();
	LastLine=new Array();
	


    LastScroll=0;    
    IndexScroll=0;
    LastFrontLive=-1;
    EventRospisi=-1;
	tPlus=new Array();
    BltState=0;
    SportState=0;
	OverSport=0;
    RapidState=0;
    LiveState=0;
    FavoritState=0;
    ttt1=0;
    ttt2=0;
	ttt3=0;
	ttt4=0;
    ChampionId=new Array();
    EventId=new Array();
    LineId=new Array();
    tipLineId=new Array();
    newlive=0;
    newlive2=0;
    mTip_Line=new Array();
    mSport=new Array();
    mResults=new Array();
    mChamps=new Array();
    mCountry=new Array();
    mEvents=new Array();
    mPrincipal=new Array();
    mPrincipal2=new Array();
    mPrincipal3=new Array();
    mPrincipal1=new Array();
    mPrincipal4=new Array();
	mPrincipal5=new Array();
    mPrinarray=new Array();
	mPrinarray[0]=mPrincipal;
	mPrinarray[1]=mPrincipal1;
	mPrinarray[2]=mPrincipal2;
	mPrinarray[3]=mPrincipal3;
	mPrinarray[4]=mPrincipal4;
	mPrinarray[5]=mPrincipal5;

    mLines=new Array();
    mRospis=new Array();
    mSamples=new Array();
    mExpress=new Array();
	mExpressState=0;
    mExpressDay=new Array();
	mExpressDayLive=new Array();
    mOrdinar=new TExpress();
    rDate=new Date();
    mOrdinar.State=1;
    resultstate=0;
    test1=0;

    mChampionships=new Array();
    Session=-1;// значения для отправки на сервер
    LastIndex=-1;// значения для отправки на сервер
    NewSport=new Array();
    NewEvent=new Array();
    NewChampion=new Array();//массив указывающий на чемпионаты, куда пришли новые евенты
    LastChampionFull=new Array();
    LastChampion=new Array();
    LastChampionLive=new Array();

    championSort=0;
    eventSort=0;
    countrySort=0;
    LIVE=0;
    ttt=0;
    langmod=0;
    langmod2=0;
    region=new TCountry();
    region.NAME_RUS="Регионы";
    SportIndex=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    SportIndex2=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    LastSportIndex=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    SportIndex2=-1;//указывает какой спорт выбран, равен индексу в массиве mSport
    CountryIndex=-1;//указывает какая страна выбрана, равна индексу в массиве mCountry
    RegionIndex=-1;//указывает выбран или не выбран регион в футболе
    ChampionIndex=-1;//указывает какой чемпионат выбран, равен ID_CHAMPIONSHIP
    ChampionTarget=-1;//указывает на какой чемпионат стоит курсор мышки равен ID_CHAMPIONSHIP
    SportTarget=-1;// указывает на какой спорт стоит курсор мышки, равен индексу в массиве mSport
    CountryTarget=-1
    loginstate=0;
	EndIndex=0;
	EndIndexDay=0;




    str="menu";


    sendarray=new Array();
    sendindex=0;




    writeUnsignedInt=writeInt;




    //opencount=0;






    mTVindex=new Array();
    mTV=new Array();



    double=new BinaryParser(false,true);




    seek=0;
    sporttag=null;
    userpass="";
    userpass2="";
    userlogin="";
    userpass3="";
    userlogin3="";
	
    mClient=new TClient();
    mH=new Array();
    rH=new Array();
    aH=new Array();
    anH=new Array();
    nH=new Array();
    bm=new Array();
    bm[0]="б";
    bm[1]="м";
    express1="Экспресс";
    system1="Система";
    system2="из";
    system3="вариантов";
    ordinar1="Ординар";
    hist2=0;
	
	t5="";
	ordvalut();



    war10="Заявка принята. Отменить заказ Вы можете в меню Истории платежей.";
    war205=""; 
    if(iphone==1) war205="Вы не авторизированы! Зарегистрироваться?";else 
	war205="Вы не авторизированы!Если у Вас нет логина, пройдите процедуру <a href='/auth/registration/' style='text-decoration:none;color:#F47621;'><b>Регистрации.<b></a>";
       war11="Извините, Ваша заявка отклонена. Недостаточно средств на счету.";
	war101="Извините, Ваша заявка отклонена. Документ не подтвержден.";
	
    war208="Ваш платеж успешно выполнен.<br />Для того, чтобы перечисленные средства стали доступны для ставок, просим Вас предоставить:<br /><br />копию паспорта (стр.2-3)<br />сканированную копию обеих сторон банковской карты, с которой осуществлялся денежный перевод на игровой счет<br />Для соблюдения конфиденциальности можно закрыть цифры номера банковской карты, кроме первых шести и последних четырех: 1234 56** **** 3456 с лицевой стороны и код безопасности CVC2 с обратной стороны.<br />Вы можете отправить копии документов наfinance@winlinebet.com<br /><br />БК Winline запрашивает документы с целью удостоверения личности клиента, согласно Правилам пополнения и вывода средств.<br />Все электронные копии документов клиента хранятся и используются согласно правилам Использования персональных данных БК Winline.<br/> В случае, если запрашиваемые документы не будут предоставлены, БК Winline оставляет за собой право сделать возврат средств и заблокировать Ваш лицевой счет.<br /><br />С уважением, Финансовый отдел БК Winline."


    war1="Не удалось сохранить Ваш документ";
    war0="Данные Вашего документа успешно сохранены";
    war4="Внесенные изменения успешно сохранены.";
    war5="Не удалось сохранить изменения.";
    war8="Новый пароль сохранен.";
    war9="Извините, не удалось изменить пароль.";
    war14="Ваше письмо успешно отправлено.";
    war191="Не удалось обновить Ваш пароль. Обратитесь в службу технической поддержки.";
    war172="Проверьте свой почтовый адрес. В течение 2-3 минут Вам придет сообщение с дальнейшими инструкциями.";
    war173="Пользователь с таким E-mail адресом не зарегистрирован.";
    war6="Вы успешно зарегистрированы. На указанный почтовый ящик отправлен Ваш логин."
    war7="Отказано в регистрации. Укзанный E-mail уже используется. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>Обратитесь в службу поддержки.</a>";
	
	war77="Отказано в регистрации. Клиент с данной фамилией, именем и датой рождения уже зарегестрирован. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>Обратитесь в службу поддержки.</a>";
	war777="Отказано в регистрации. Номер мобильного телефона уже используется. <a style='color:#F47621;text-decoration:none;' href='#' onclick='javascript:try{window.history.pushState(&quot;&quot;,&quot;&quot;, &quot;/pomosch/obratnaya-svyaz/&quot;);loadPage(window.location.href);hashChanged(&quot;&quot;);CloseWarning();} catch(e){window.location.hash=&quot;/pomosch/obratnaya-svyaz/&quot;}return false;'>Обратитесь в службу поддержки.</a>";
    war13="Неправильный логин или пароль. Воспользуйтесь службой восстановления пароля, или обратитесь в службу технической поддержки.";
    war202="Максимальное количество событий в экспрессе или системе равно 20.";
    war203="Коэффициент превышает 1000! Согласно правилам, выплата будет рассчитана исходя, что коэффициент равен 1000.";
    war3="Извините, Ваша ставка не принята.";
	war33="Ваша ставка обрабатывается.В ближайшие время Вы получите оповещение, принята или отклонена.";
	war2="Ваша ставка принята.Информация о Ваших ставках отображается в разделе<br />«МОЙ СЧЕТ».";
    war167="Вы не приняли условия и правила приема ставок.";
    war201="Вы действительно желаете отменить заявку?";

    dis=new Array();

    for(i=0;i<40;i++) dis[i]="none";

    dis[1]="";
    dis[2]="";
    dis[4]="";
    dis[5]="";
    dis[9]="";
    dis[10]="";
    dis[11]="";
    dis[14]="";
    dis[26]="";











    KOEF1=0;



    colorlive=0;
    color=0;

    FII=0;

    display=new Array("","none");



    lastchampblt=-1;



    //;
    //ppd1=pdd.getTime();





    date2=new Date();




    today="Сегодня";
    Nichya="Ничья";




    display3=new Array("none","none","","none");
    color4=new Array("#FFFFFF","#EBEBEB");
    color4index=0;
	color5index=new Array(0,0,0,0,0,0);

   principalDay=new Array();
   principalDayIndex=new Array();
   principalDayLive=new Array();
   principalDayLiveCurrent=new Array();
   principalDayLiveIndex=new Array();
   nowprincipal=new Array();
   seoprincipal=new Array();
       

    principal=new Array();
    principal2=new Array();
    principal3=new Array();
    principal1=new Array();
    principal4=new Array();
	principal5=new Array();
    prinarray=new Array();
	prinarray[0]=principal;
	prinarray[1]=principal1;
	prinarray[2]=principal2;
	prinarray[3]=principal3;
	prinarray[4]=principal4;
	prinarray[5]=principal5;
	
	
	
	    


    display4=new Array("none","","");
	uprap=new Array();
	uprap[-2]=uprap[-1]="png";
	uprap[1]=uprap[2]="gif";
	uprap2=new Array();
	uprap2[-2]=uprap2[-1]="";
	uprap2[1]=uprap2[2]="us";
	
	
    //display4=new Array("","","");


    plusinterval=new Array();
    //plusline=new Array();
    //for(i=0;i<30;i++) {plusinterval[i]=new Array();plusline[i]=new Array();}


    linterval=new Array();
	lintindex=0;
	LineArray=new Array();
	uparray=new Array(0,11);
	uparrayw=new Array(0,8);
	uparray2=new Array(0,11);
	for(i=0;i<25;i++) LineArray[i]=new Array();
	 


    printerval=new Array();
    for(i=0;i<3;i++) printerval[i]=new Array();

    printerval2=new Array();
    for(i=0;i<3;i++) printerval2[i]=new Array();

    printerval3=new Array();
    for(i=0;i<3;i++) printerval3[i]=new Array();

    printerval1=new Array();
    for(i=0;i<3;i++) printerval1[i]=new Array();

    printerval4=new Array();
    for(i=0;i<3;i++) printerval4[i]=new Array();

    printerval5=new Array();
    for(i=0;i<3;i++) printerval5[i]=new Array();


    podacha=new Array(0,-2,44);
    podacha2=new Array(0,1,49);






    lbarray=new Array("Свернуть чемпионат","Развернуть чемпионат");
    Action1=null;
	Action2=null;
	Action3=null;
	Action4=null;

    period="периоде";
    quarter="четверти";
	inning="иннинге";
    sete="сете";


    Plusup=new TPlusup();


    log2=0;
	log1=0;


    iternews=1;

    x12=new Array(0,2,1)


    istoriaction=0;
    clientindex=0;
    rclientindex=-1;
    rclientindex2=-1;
    rclientindex3=-1;


    colon1='<div style="float:left;width:744px;height:0px;"><div style="float:left;width:73px;border-right:1px solid #DADADA;background-color:#FFFFFF;height:2000px;"></div><div style="float:left;width:289px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left;width:50px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left; margin-left:0px; width:181px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left;width:70px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div><div style="float:left; width:75px;border-right:1px solid #DADADA;height:2000px;background-color:#FFFFFF;"></div></div>'

    colon2='<div style="float:left;width:744px;height:0px;"><div style="float:left;width:73px;border-right:1px solid #DADADA;background-color:#EBEBEB;height:2000px;"></div><div style="float:left;width:289px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left;width:50px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left; margin-left:0px; width:181px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left;width:70px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div><div style="float:left; width:75px;border-right:1px solid #DADADA;height:2000px;background-color:#EBEBEB;"></div></div>'








    statusr=0;
    statuscupon=0;
    rTextField2=null;





    minExpress=new Array();
    min2Express=new Array();
    minExpress[0]=0;
    minExpress[1]=0;
    minExpress[2]=0;
    min2Express[0]=0;
    min2Express[1]=0;
    min2Express[2]=0;


    viplata=new Array();
    viplata[0]=0;
    viplata[1]=0;
    viplata[2]=0;
	
	
    viplata2=new Array();
    viplata2[0]=0;
    viplata2[1]=0;
    viplata2[2]=0;
	


    flagsend=0;

id_("logo").onclick=function(){OverSport=0;id_("sport999").style.display="";}


id_("eventscautScroll").onmousedown=scautscroll;
if (window.addEventListener) id_("eventscaut").addEventListener('DOMMouseScroll', scautwheel, false);
id_("eventscaut").onmousewheel = scautwheel;
id_("eventscaut").onclick=scautmove;


id_("eventscautScroll1").onmousedown=scautscroll1;
if (window.addEventListener) id_("eventscaut1").addEventListener('DOMMouseScroll', scautwheel1, false);
id_("eventscaut1").onmousewheel = scautwheel1;
id_("eventscaut1").onclick=scautmove1;

 


    savestate=0;
	savestateDay=0;
	savestateDayLive=0;
    sysmore=0;
    sysalert=0;
	euroline=0;





    systemkoef=0;
    expresskoef=0;
	expresskoefDay=0;
	expresskoefDayLive=0;
    viplataDay=0;
    min2ExpressDay=0;
    minExpressDay=0;
	viplataDayLive=0;
    min2ExpressDayLive=0;
    minExpressDayLive=0;





    Bonus=new TExpress();
    //Bonus.Title.text="Бонус «Экспресс»";
    Bonus.V=0;Bonus.Max=1;








    restrict2="1234567890."
    restrict="1234567890."
	restrict3="1234567890."
    restrictDay2="1234567890."
	restrictDayLive2="1234567890."






























    sendstate=0;
    sendbox=0;
    actionstate=0;


    stavcaExpressflag=0;

    //N=parseFloatExt("1234.5555");
    //writeDouble(N);


    famstring=new Array("Паспорт гражданина Российской Федерации","Паспорт выданный другой страной","Водительское удостоверение","Дополнительный документ","Банковская карта MasterCard");



echip=new Array("Не выбрано","ЦСКА Москва","Спартак Москва","Зенит Санкт-Петербург","Локомотив Москва","Динамо Москва","Рубин","Кубань","Манчестер Юнайтед","Манчестер Сити","Челси","Арсенал Лондон","Ливерпуль","Барселона","Реал Мадрид","Бавария","Боруссия Дортмунд","Ювентус","Милан","Интер","ПСЖ");
// JavaScript Document

var city=new Array();	
var regiune=new Array();	

//-------------------------------------



	
	for(i=0;i<echip.length;i++) {Reg4[18].options.add(new Option(echip[i],i));Reg7[11].options.add(new Option(echip[i],i));}


    calend=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
    Val=new Array("RUR","USD","EUR");
    Question=new Array("Девичья фамилия вашей матери?","Имя вашей(его) супруги(га)?","Любимое время года?","Ваш любимый фильм?","Ваша любимая еда?","Ваша любимая спортивная команда?","Имя вашего питомца?","Имя Вашего отца?","Имя вашего лучшего друга?");



    

for(i=0;i<Money1.length;i++){//if(i==10) Money1[i].index=1;if(i<10) Money1[i].index=i+1;if(i>10) 
Money1[i].index=i+1;
Money1[i].onclick=mone1click;
if(monevvod[i]==0) Money1[i].style.display="none";
Money1[i].onmousedown=function(){this.childNodes[0].src="/resources/money/p"+this.index+"-3.png?7";}
Money1[i].onmouseover=function(){if(schet_current1==this.index) return; this.childNodes[0].src="/resources/money/p"+(this.index)+"-1.png?7";}
Money1[i].onmouseout=function(){if(schet_current1==this.index) return; if(schet_current1>0) this.childNodes[0].src="/resources/money/p"+(this.index)+"-2.png?7";else this.childNodes[0].src="/resources/money/p"+(this.index)+"-2.png?7";}

;}
for(i=0;i<Money2.length;i++){
Money2[i].index=i+1; 
Money2[i].onclick=mone2click;
if(monevivod[i]==0) Money2[i].style.display="none";
Money2[i].onmouseover=function(){if(schet_current2==this.index) return; var index=this.index;if(index==7) index=2;this.childNodes[0].src="/resources/money/p"+index+"-1.png?7";}
Money2[i].onmousedown=function(){var index=this.index;if(index==7) index=2; this.childNodes[0].src="/resources/money/p"+index+"-3.png?7";}
Money2[i].onmouseout=function(){if(schet_current2==this.index) return; var index=this.index;if(index==7) index=2; if(schet_current2>0) this.childNodes[0].src="/resources/money/p"+index+"-2.png?7";else this.childNodes[0].src="/resources/money/p"+index+"-2.png?7";}
}


grandstate=0;
GrandCookie=new Array();


   








//    for(i=0;i<3;i++) BlstButton[i]=id_("BLST").childNodes[i+1];
Smenu=cs_("smenu");
zvezda=0;

    DateBox.onchange=DrawTable;
    BltBox.onchange=DrawTable;
    GMTBox.onchange=GMTChange;
	ELBox.onchange=ELChange;
    IstoriaBoxData.onchange=extractIstoria;
    IstoriaBox.onchange=extractIstoria;




    
    if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()>0)) dif=dif+24;
    if((dif<0)&&(date.getFullYear()-date.getUTCFullYear()==0)&&(date.getMonth()-date.getUTCMonth()==0)&&(date.getDate()-date.getUTCDate()>0)) dif=dif+24;


    newOpt=null;
    for(i=0;i<24;i++){if(i<12) newOpt=new Option("GMT"+(i-12),i-12); if(i>12)newOpt=new Option("GMT+"+(i-12),i-12); if(i==12)newOpt=new Option("GMT "+(i-12),i-12); GMTBox.options.add(newOpt);}

    diftime=GMTBox.selectedIndex=12+dif;
    diftime=diftime-12;




    if(Reg10[0]) {
        for(i=0;i<coboxtext.length;i++)
            Reg10[0].options.add(new Option(coboxtext[i],i));
    }








    Login.onfocus=loginin;
    Login.onblur=loginout;

    Password.onfocus=passwordin;
    Password.onblur=passwordout;


    for(i=0;i<Submenu.length;i++){Submenu[i].parentNode.onmouseover=function(){this.childNodes[1].style.display="block";};
    Submenu[i].parentNode.onmouseout=function(){this.childNodes[1].style.display="none";};
    }




//    Logged.childNodes[8].onmouseover=function(){Logged.childNodes[8].childNodes[1].style.display="";Logged.childNodes[8].style.background="url(/resources/images/mbg.png?7) no-repeat";}
 //   Logged.childNodes[8].onmouseout=function(){Logged.childNodes[8].childNodes[1].style.display="none";Logged.childNodes[8].style.background="url(/resources/images/mbgn.png?7) center center  no-repeat";}



//    tim1=setInterval(`slidenews`,15000);






    EmailCod=window.location.hash;

/*
    if((window.location.hash=="#istoria")||(window.location.hash=="istoria")||(window.location.hash=="#plata")||(window.location.hash=="plata")||(window.location.hash.indexOf("plus")>-1)
    ||(window.location.hash=="#results")||(window.location.hash=="results")||(window.location.hash=="#personal")||(window.location.hash=="personal")
    ||(window.location.hash=="#remember1")||(window.location.hash=="remember1")||(window.location.hash=="#remember2")||(window.location.hash=="remember2")||(window.location.hash=="#warning")||(window.location.hash=="warning")||(window.location.hash=="scan")||(window.location.hash=="#scan"))
    window.location.hash="";else hashChanged();
*/

    EmailCod=decodeURI(EmailCod.split("#").join(""));





    storedHash=window.location.hash;
	
	sound1=1;
	//sound3=new Array(161,1064,50,45,40,1012,150,1064,1002);
	sound3=new Array(1013,1013);
	sound4=new Array(30,30);
	sound5=new Array(1024,1024);
		

 //   if ("onhashchange" in window) { /*window.onhashchange=hashChanged;*/ }
  //  else setInterval(HashCheck,200);
 //function HashCheck(){if (window.location.hash!= storedHash) {hashChanged();storedHash=window.location.hash;}}



    

    for(i=0;i<Val.length;i++) if(i<2){Reg4[11].options.add(new Option(Val[i],i+1));Reg7[3].options.add(new Option(Val[i],i+1)); } else {Reg4[11].options.add(new Option(Val[i],i+2));Reg7[3].options.add(new Option(Val[i],i+2)); }

    for(i=0;i<Question.length;i++) Reg4[12].options.add(new Option(Question[i],i));


    for(i=0;i<31;i++) {Reg7[28].options.add(new Option((i+1),(i+1)));Reg7[31].options.add(new Option((i+1),(i+1)));}

    for(i=0;i<12;i++) {Reg7[29].options.add(new Option(calend[i],(i+1)));Reg7[32].options.add(new Option(calend[i],(i+1)));}

    

    for(i=1980;i<2014;i++) Reg7[30].options.add(new Option(i,i));
    Reg7[30].selectedIndex=25;

    for(i=2013;i<2040;i++) Reg7[33].options.add(new Option(i,i));
    Reg7[33].selectedIndex=5;


    for(i=1;i<4;i++) Reg7[25].options.add(new Option(famstring[i-1],i));



    regsend=0;


    //radioclick();
	


    document_temp=null;;
    k_document=0;



    




    PlataBoxOperation.options.add(new Option("Все операции",0));
    PlataBoxOperation.options.add(new Option("Пополнение счета",0));
    PlataBoxOperation.options.add(new Option("Вывод средств",0));
    PlataBoxOperation.options.add(new Option("Заказ",0));



    dateb=new Date();
    dateb.setTime(rDate.getTime()+15*3600*1000*24);

    for(i=0;i<300;i++){dateb.setTime(dateb.getTime()-3600*1000*24);
    PlataBoxData2.options.add(new Option(zeroadd(dateb.getDate())+"-"+zeroadd(dateb.getMonth()+1)+"-"+zeroadd(dateb.getFullYear()),dateb.getTime()/1000));
    PlataBoxData1.options.add(new Option(zeroadd(dateb.getDate())+"-"+zeroadd(dateb.getMonth()+1)+"-"+zeroadd(dateb.getFullYear()),dateb.getTime()/1000));}
    PlataBoxData2.selectedIndex=100;




    dateb=new Date();
    dateb.setUTCHours(0);
    dateb.setUTCMinutes(0);
    dateb.setUTCMilliseconds(0);
    dateb.setUTCSeconds(0);
    Pvivod[0].options.add(new Option(zeroadd(dateb.getUTCDate())+"."+zeroadd(dateb.getUTCMonth()+1)+"."+dateb.getUTCFullYear(),dateb.getTime()/1000));

    for(i=0;i<9;i++){dateb.setTime(dateb.getTime()+24*60*60*1000);
    Pvivod[0].options.add(new Option(zeroadd(dateb.getUTCDate())+"."+zeroadd(dateb.getUTCMonth()+1)+"."+dateb.getUTCFullYear(),dateb.getTime()/1000));

    }





    //for(l=i;l<i+7;l++) {mClient.DATE_STAVCA[l]=new Date();mClient.DATE_STAVCA[l].setTime(date.time+24*60*60*1000*(l-i));mClient.DATE_STAVCA[l].hoursUTC=0;mClient.DATE_STAVCA[l].millisecondsUTC=0;mClient.DATE_STAVCA[l].secondsUTC=0;}








    rem_n=0;
    rem_k=0;













    casa_address=new Array();
    casa_id=new Array();
	casa_byte=new Array();
    casa_name=new Array();

orash=new Array("Москва","Казань","Белгород","Калужская область");
    address=new Array();
    dop_address=new Array();
    dop2_address=new Array();



    address[0]=new Array("ст.м. Арбатская, ул. Новый Арбат 10","ст.м. Пушкинская, Пушкинская пл. 2","ст.м. Воробьевы Горы, ул. Косыгина 15","ст.м. Маяковская, ул. Большая Садовая, д.5","ст. м. Фрунзенская, ул. Фрунзенская набережная, 24д");
    address[1]=new Array("пр. Ямашева 51Б","ул. Волгоградская 2А");
    address[2]=new Array("ул. Лермнотова 9a","ул. Чапаева 24");
	address[3]=new Array("г. Балабаново, ул. 50 лет Октября 13");
	

    dop_address[0]=new Array("Спорт-Бар<br />10:00-06:00","на месте бывшего клуба XO, казино Шангри-Ла<br />круглосуточно","гостиница Корстон<br/>круглосуточно","гостиница Пекин<br />круглосуточно","Букмекерский центр Сириус<br />13.00-01.00");
    dop_address[1]=new Array("<br />12:00-00:00","<br />12:00-00:00");
    dop_address[2]=new Array("<br />12:00-00:00","<br />12:00-00:00");
    dop_address[3]=new Array("<br />круглосуточно");

    dop2_address[0]=new Array("трансляции спортивных событий, большие экраны, европейская и японская кухня<br />тел: +7 (495) 229-3167","трансляции спортивных событий, ресторан<br />тел: +7 (495) 668-1388","трансляции спортивных событий, ресторан, бар<br />тел: +7 (495) 668-1430","<br />тел: +7 (495) 780-3353","");
    dop2_address[1]=new Array("трансляции спортивных событий","трансляции спортивных событий");
    dop2_address[2]=new Array("трансляции спортивных событий","трансляции спортивных событий");
    dop2_address[3]=new Array("трансляции спортивных событий");
	


    psps="<br/><br/><b>Адреса пунктов пополнения счета:</b>";
    for(i=0;i<orash.length;i++)
    {

    psps=psps+'<span style="float:left;width:602px;margin-top:20px;"><b>'+orash[i]+'</b></span><span style="float:left;width:602px;margin-top:7px;margin-bottom:5px;border-bottom:1px solid #FFFFFF;"></span><div style="float:left;width:602px;margin-left:40px;">';

    for(j=0;j<address[i].length;j++){
    psps=psps+"<span style='float:left;width:600px;margin-top:2px;'><b>Касса №"+(j+1)+"</b> :  "+address[i][j]+" , "+dop_address[i][j].replace("уг.","угол ")+", "+dop2_address[i][j]+"</span>";}

    psps=psps+"</div>"
    ;}


    Ppsvvod.innerHTML=psps;







    /*
    function getDocumentHeight(){
    return (document.body.scrollHeight > document.body.offsetHeight)? document.body.scrollHeight: document.body.offsetHeight;
    }
    */






    expire=new Date(2020,11,12,12,12,12,12);
    secure=false;



    //deleteCookie("eventarray","/" ,"");
    //deleteCookie("champarray","/" ,"");
    //deleteCookie("champarraylive","/" ,"");



    







    UCHASTNIK1="Локомотив М";
    UCHASTNIK2="ЦСКА";
    favorit=new Array(0,2,2);









    //Topus.style.height=(getDocumentHeight()-800)+"px";
    ordinarclick();






    //window.onscroll=function(){alert("top="+window.pageYOffset+"client="+document.documentElement.clientHeight);}



    War[1].onclick=CloseWarning;
    War[4].onclick=CloseWarning;






    ua = navigator.userAgent.toLowerCase(); 
    isOpera = (ua.indexOf('opera') > -1); 
    isIE = (!isOpera && ua.indexOf('msie') > -1); 




    myWidth = 0, myHeight = 0;
    cmh=0;




    alertSize();
    window.onresize=alertSize;
    //showWarning(war208,"Зарегестрироваться","",0);

    window.onscroll=drawscroll2;
    openstate=0;
    handshakestate=0;

    ipadres="badipaddress";
    //ipadres="192.34.22.33";

    SendRequest("POST","/getip.php","", Response15);




    //46.165.226.6:1065?command=rus


    //alert(2);
    webSocket=null;
    closeout=null;
    // if(port != 80)
    
	  if(lsc==1) Loadscript();else  LoadScript();


    if(port!=80){
    function onClose(event){if(closeout)clearTimeout(closeout);closeout=setTimeout(onClose2,2000);}

    function onClose2(){
	EmailCod=window.location.hash;
    EmailCod=decodeURI(EmailCod.split("#").join(""));    
    //alert(webSocket.readyState);    
    if(webSocket.readyState==2) handshakestate++;    
    if(handshakestate==10){
    port=80;
    //websocket=new Socket();
    id_("FLASH").innerHTML='<div id="FlashMovie" style="width:1px;height:1px;position:relative;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" id="FlashID" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"><param name="movie" value="/resources/decode.swf?'+Math.round(200*Math.random())+'" /><param name="AllowScriptAccess" value="always"/> <!--[if !IE]>--><object name="movie" type="application/x-shockwave-flash" data="/resources/decode.swf?'+Math.round(200*Math.random())+'" width="1" height="1" AllowScriptAccess="always" pluginspage="http://www.adobe.com/go/getflashplayer_ru"><!--<![endif]--><!--[if !IE]>--></object><!--<![endif]--></object></div>';
    if(navigator.appName.indexOf("Microsoft") != -1) webSocket=id_("FlashID");else 
    {try{webSocket=document.getElementsByName("movie")[1];}catch(e){webSocket=id_("FlashID");};}
    ;return;
    ;}

    //alert("onclose");//return;
    userlogin3=userlogin;
    userpass3=userpass;
    loginexit();
    ttt2=0;
    ttt=0;
    nodata=0;
    if(lsc==1) Loadscript();else  LoadScript();
	webSocket = new WebSocket('ws://46.165.226.6:'+port);
    //alert("gg");
    //webSocket = new WebSocket('ws://25.158.148.139:'+port);

    
	
	webSocket.onopen = function(event) {
    userlogin=getCookie("lgn")[0];
	userpass=getCookie("prl")[0];
	if(document.cookie){
	guid=getCookie("guid")[0];
	if(!guid) guid="";} else guid="no";
	if(userlogin&&userpass&&userlogin.length>3&&userpass.length>5){userlogin3=userlogin;userpass3=userpass;}
	//webSocket.send("WINLINE");webSocket.send("sample");ttt=0;webSocket.send("menu");webSocket.send("data");
    if(nodata==2) {
	webSocket.send("nodata");
	webSocket.send("WINLINE");
	sendindex=0;sendarray.splice(0); 
	writeUTF(guid);
	//writeUTF(inithref);
	writeUTF(document.referrer);
	sendarray[sendindex]=0;
    if(guidstate==0) webSocket.send("WINLINECOOK"); else  webSocket.send("WINLINECOOK2");
    webSocket.send(EncodeBase64_2(sendarray));

    var u=inithref.split("unit=");
   if(u.length>1&&guidstate==0){
	sendindex=0;sendarray.splice(0); 
	writeUTF(u[u.length-1]);
	sendarray[sendindex]=0;
    webSocket.send("UNIT");
    webSocket.send(EncodeBase64_2(sendarray));
    }

	guidstate++;
	
	if(userlogin3&&userlogin3.length>3&&userpass3.length>5){
    sendindex=0;sendarray.splice(0); 
	writeUTF(userlogin3);
	writeUTF(userpass3);
    writeUTF(ipadres);
    userlogin=userlogin3;
    userpass=userpass3;
    sendarray[sendindex]=0;
    webSocket.send("clientlogin");
    webSocket.send(EncodeBase64_2(sendarray));
    userpass3="";
    userlogin3="";
    } 

    if((EmailCod.length>3)&&(EmailCod.indexOf('{')>-1)){
    sendindex=0;
    sendarray.splice(0);
    writeUTF(EmailCod);
    sendarray[sendindex]=0;
    webSocket.send("sendcodemail");
    webSocket.send(EncodeBase64_2(sendarray));}
    } else nodata=1;
	
	};


    webSocket.onerror=function(event){webSocket.onclose=function(event){x=3;};onClose(event);};
    webSocket.onclose =onClose;

    webSocket.onmessage = function(event){
    //if(opencount==0) {opencount=1;return;}
    step=event.data.charCodeAt(0);mes=event.data.slice(1);
	decode(mes,step);
	
	
	};}

    //function message(data){step=data.charCodeAt(0);mes=data.slice(1);decode(mes,step);}

    //alert(port);


    webSocket = new WebSocket('ws://46.165.226.6:'+port);
    //webSocket = new WebSocket('ws://25.158.148.139:'+port);
    webSocket.onerror=function(event){webSocket.onclose=function(event){x=3;};onClose(event);};
    webSocket.onclose=onClose;

    webSocket.onopen = function(event) {
	openstate=1;    
    //webSocket.send("WINLINE");webSocket.send("sample");
	
	userlogin=getCookie("lgn")[0];userpass=getCookie("prl")[0];
	if(document.cookie){guid=getCookie("guid")[0];
	if(!guid) guid="";} else guid="no";
	
	if(userlogin&&userpass&&userlogin.length>3&&userpass.length>5){userlogin3=userlogin;userpass3=userpass;}
	
	
    if(nodata==2) {webSocket.send("nodata");webSocket.send("WINLINE");
	sendindex=0;sendarray.splice(0); 
	writeUTF(guid);
	//writeUTF(inithref);
	writeUTF(document.referrer);
	sendarray[sendindex]=0;
    if(guidstate==0) webSocket.send("WINLINECOOK");else webSocket.send("WINLINECOOK2");
    webSocket.send(EncodeBase64_2(sendarray));
	
    var u=inithref.split("unit=");
    if(u.length>1&&guidstate==0){
	sendindex=0;sendarray.splice(0); 
	writeUTF(u[u.length-1]);
	sendarray[sendindex]=0;
    webSocket.send("UNIT");
    webSocket.send(EncodeBase64_2(sendarray));
  }

	guidstate++;
	
	if(userlogin3&&userlogin3.length>3&&userpass3.length>5){
    sendindex=0;
    sendarray.splice(0);
    writeUTF(userlogin3);
    writeUTF(userpass3);
    writeUTF(ipadres);
    userlogin=userlogin3;
    userpass=userpass3;
    sendarray[sendindex]=0;
    webSocket.send("clientlogin");
    webSocket.send(EncodeBase64_2(sendarray));
    userpass3="";
    userlogin3="";}

    if((EmailCod.length>3)&&(EmailCod.indexOf('{')>-1)){
    sendindex=0;
    sendarray.splice(0);
    writeUTF(EmailCod);
    sendarray[sendindex]=0;
    webSocket.send("sendcodemail");
    webSocket.send(EncodeBase64_2(sendarray));}

    } else nodata=1;

	
	

    //ttt=0;webSocket.send("menu");webSocket.send("data");


    }



    webSocket.onmessage = function(event){
    //if(opencount==0) {opencount=1;return;}
    step=event.data.charCodeAt(0);
    mes=event.data.slice(1);
    decode(mes,step);
    };

    ;}



    fl=null;

    if(port==80){
	  //websocket=new Socket();
    id_("FLASH").innerHTML='<div id="FlashMovie" style="width:1px;height:1px;position:relative;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" id="FlashID" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"><param name="movie" value="/resources/decode.swf?'+Math.round(200*Math.random())+'" /><param name="AllowScriptAccess" value="always"/> <!--[if !IE]>--><object name="movie" type="application/x-shockwave-flash" data="/resources/decode.swf?'+Math.round(200*Math.random())+'" width="1" height="1" AllowScriptAccess="always" pluginspage="http://www.adobe.com/go/getflashplayer_ru"><!--<![endif]--><!--[if !IE]>--></object><!--<![endif]--></object></div>';
    if(navigator.appName.indexOf("Microsoft") != -1) webSocket=id_("FlashID");else 
    {try{webSocket=document.getElementsByName("movie")[1];}catch(e){webSocket=id_("FlashID");};}


    ;}


    flashtime=0;

 glob="";

scautarr=new Array(); 
scautarr[60]="Замена";scautarr[30]="Гол";scautarr[1018]="Гол";scautarr[1019]="Гол отменен";scautarr[50]="Красная карточка";scautarr[45]="Красная карточка";scautarr[1040]="Красная карточка";scautarr[1041]="Красная карточка отменена";scautarr[40]="Желтая карточка";scautarr[1084]="Желтая карточка";scautarr[1085]="Желтая карточка отменена";scautarr[1013]="";scautarr[154]="Угловой";scautarr[1017]="Угловой отменен";scautarr[1016]="Угловой";scautarr[1029]="Опасная атака";scautarr[1030]="Мяч вне опасности";scautarr[161]="Пенальти";scautarr[666]="Пенальти не забит";scautarr[1042]="Пенальти";scautarr[1043]="Пенальти отменен";scautarr[1012]="Начали с центра";scautarr[1024]="Матч сейчас начнется";scautarr[152]="Вбрасывание";scautarr[151]="Удар от ворот";scautarr[150]="Штрафной";scautarr[156]="Удар мимо ворот";scautarr[155]="Удар в створ ворот";scautarr[172]="Удар заблокирован";scautarr[157]="Вратарь отбил";scautarr[153]="Оффсайд";scautarr[158]="Повреждение";scautarr[168]="Вернулся после повреждения";scautarr[90]="";scautarr[1039]="";scautarr[1064]="Игра началась после гола";scautarr[1002]="Пенальти";scautarr[1104]="Начали пенальти";scautarr[15]="Матч временно прервался";scautarr[16]="Игра продолжилась";scautarr[1015]="";scautarr[164]="";scautarr[1014]="";
scautarr2=new Array(60,30,50,45,40,1013,154,1012,1024,1015,164,1014); 

scautarrr2=new Array(30,40,45,50,60,150,152,154,155,156,161,1013,1016,1018,1084,1029,10292);
scautarrr=new Array(); 
for(i=0;i<scautarrr2.length;i++) scautarrr[scautarrr2[i]]=scautarrr2[i];
scautarrr[1019]=1018;
scautarrr[1041]=50;
scautarrr[1040]=50;
scautarrr[1084]=40;
scautarrr[1085]=40;
scautarrr[1016]=154;
scautarrr[1017]=154;
scautarrr[1030]=1;
scautarrr[666]=161;
scautarrr[1043]=161;
scautarrr[1042]=161;
scautarrr[1002]=161;
scautarrr[1104]=161;

scautarrr[1012]=1;
scautarrr[1024]=1;
scautarrr[151]=1;
scautarrr[172]=1;
scautarrr[157]=1;
scautarrr[153]=1;
scautarrr[168]=1;
scautarrr[158]=1;
scautarrr[90]=1;
scautarrr[1039]=1;
scautarrr[1064]=1;

scautarrr[15]=1;
scautarrr[15]=1;
scautarrr[1015]=1;
scautarrr[164]=1;
scautarrr[1014]=1;





//tryrad=new Array(43,10000);
//tryradl=new Array(0,10000);
tryrad=new Array();
tryradl=new Array();
inithref=window.location.href;



if(window.location.href.indexOf("auth")>-1) hashChanged(window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain)).replace(/\/auth\//, ''));

var page2=window.location.href.substring(document.domain.length+window.location.href.indexOf(document.domain));
if(page2=='/stavki/sport/') hashChanged('stavki');
/*
		if(id_("ACTION2")&&window.location.href.indexOf("novosti/390.html")>-1){
	var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:11px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+id_("ACTION2").innerHTML;
id_("ACTION2").innerHTML=string;timerkfunc();
timerk=setInterval(timerkfunc,1000);			
			}

if(window.location.href.indexOf("novosti/?page")>-1||page2=="/novosti/"){
for(i=0;i<cs_("info").length;i++) if(cs_("info")[i].innerHTML.indexOf("КЕРЖА")>-1){	
var string='<div id="TIMERK" class="crystal" style="width:102px;height:73px;margin-top:6px;margin-left:308px;position:absolute;"><div style="width:100%;font-size:48px;text-align:center;margin-top:-2px;color:#F47621;"></div><div style="width:100%;font-size:18px;text-align:center;margin-top:-2px;color:#F47621;"></div></div>'+cs_("info")[i].innerHTML;
cs_("info")[i].innerHTML=string; timerkfunc();
timerk=setInterval(timerkfunc,1000);break;}			
}
*/

var freebet1='<div style="float:left;width:100%;height:57px;background-color:#36a903;"><div style="width:230px;margin-left:8px;margin-top:5px;;color:#fff;font-size:12px;">Использовать бесплатную ставку:</div><select style="float:left;margin-left:8px;width:142px;color:#000;font-size: 11px;margin-top: 9px;outline:none;height:18px;">';
var freebet2='</select><div id="FREEBET" onclick="sendfreeordinar(';
var freebet3=');">Принять</div></div>';

var freebetstate=0;
var freebetstate2=0;
var freebetnum=0;
var freebetsumm=0;
var freebetid=0;
var freeDate=new Date();
var freebetarray=new Array();

function Freebet(){
this.Sports=new Array();
this.Champs=new Array();
this.Events=new Array();
this.minkoef=0;
this.id=0;
this.date=new Date();
this.summa=0;
}

function Loadscript(){
//var src="http://46.165.226.6:1068/all.js";
var src="http://46.165.226.6:1068/all.js";
//console.log("Loadscript");
el=document.createElement('script');
el.setAttribute('src',src+"?"+Math.round(Math.random()*2000));
el.setAttribute('type','text/javascript');
document.getElementById("fff").appendChild(el);
}



id_("ppk").onclick=function(){if(loginstate==0||demo==0) return; webSocket.send("demoaddmoney"); }


cs_("fm2")[0].style.display=cs_("fm2")[0].nextSibling.style.display="none";


document.body.onmousedown=function(){clicktime=1;}
cs_("item")[1].style.display="none";
cs_("menu")[0].style.width="700px";
loadComplete();
