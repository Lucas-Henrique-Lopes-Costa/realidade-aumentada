(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"data":{"history":{},"locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"pitch":1,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1},"name":"Player475","defaultLocale":"pt"},"layout":"absolute","backgroundColorRatios":[0],"propagateClick":false,"height":"100%","width":"100%","children":["this.MainViewer"],"scrollBarColor":"#000000","hash": "97adcdf926e50c2be234742cc635472a1eff9fb5f604e20292d59a2eb194ad3a", "definitions": [{"touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true},{"vfov":180,"hfov":360,"hfovMax":130,"label":trans('panorama_1A13DECC_0836_603D_4170_5D75898FBCD2.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_t.jpg","cube":{"levels":[{"rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"}}],"data":{"label":"QUARTO-VICTORIA-scaled"},"id":"panorama_1A13DECC_0836_603D_4170_5D75898FBCD2","class":"Panorama","hfovMin":"150%","thumbnailUrl":"media/panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_t.jpg"},{"initialSequence":{"movements":[{"yawSpeed":33.25,"pitchSpeed":17.05,"targetYaw":-83.05,"class":"TargetPanoramaCameraMovement","easing":"cubic_in_out","targetPitch":5.06},{"yawSpeed":33.25,"pitchSpeed":17.05,"targetYaw":103.48,"class":"TargetPanoramaCameraMovement","end":"this.showWindow(this.window_1068DA91_0832_6024_419F_F7043B12EF7E, null, false)","easing":"cubic_in_out","targetPitch":-11.13},{"yawSpeed":33.25,"pitchSpeed":17.05,"targetYaw":-145.86,"class":"TargetPanoramaCameraMovement","easing":"cubic_in_out","targetPitch":63.97}],"class":"PanoramaCameraSequence"},"id":"panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true},{"footerBackgroundOpacity":1,"gap":10,"footerBorderColor":"#000000","closeButtonPressedIconLineWidth":2,"veilColorDirection":"horizontal","closeButtonRollOverBorderColor":"#000000","closeButtonBackgroundColor":[],"data":{"name":"Window3670"},"shadowHorizontalLength":3,"closeButtonPressedIconColor":"#FFFFFF","layout":"vertical","footerBorderSize":0,"modal":true,"headerPaddingBottom":10,"closeButtonBackgroundOpacity":0,"shadow":true,"titlePaddingRight":5,"closeButtonPaddingLeft":0,"titleHorizontalAlign":"left","width":400,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"veilOpacity":0.4,"height":600,"closeButtonRollOverIconLineWidth":2,"propagateClick":false,"bodyBackgroundColorDirection":"vertical","closeButtonPressedBackgroundColor":["#3A1D1F"],"titlePaddingLeft":5,"horizontalAlign":"center","scrollBarColor":"#000000","footerBackgroundColorDirection":"vertical","closeButtonIconColor":"#000000","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"borderRadius":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingRight":0,"closeButtonPaddingTop":0,"headerPaddingTop":10,"closeButtonPaddingBottom":0,"closeButtonBackgroundColorRatios":[],"closeButtonRollOverIconColor":"#FFFFFF","titleFontColor":"#000000","closeButtonBorderSize":0,"bodyPaddingLeft":5,"closeButtonIconWidth":12,"bodyBorderColor":"#000000","id":"window_1068DA91_0832_6024_419F_F7043B12EF7E","closeButtonPressedBackgroundColorRatios":[0],"headerVerticalAlign":"middle","closeButtonPressedBorderColor":"#000000","headerPaddingRight":10,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonIconLineWidth":2,"closeButtonRollOverBackgroundOpacity":0,"bodyPaddingTop":5,"scrollBarMargin":2,"titlePaddingBottom":5,"shadowColor":"#000000","closeButtonRollOverBackgroundColor":["#C13535"],"titleFontFamily":"Arial","headerBackgroundOpacity":1,"overflow":"scroll","bodyPaddingBottom":5,"headerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundColorRatios":[0],"veilColor":["#000000","#000000"],"backgroundColorRatios":[],"closeButtonIconHeight":12,"closeButtonPressedBackgroundOpacity":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"headerPaddingLeft":10,"closeButtonPressedBorderSize":0,"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"bodyBorderSize":0,"bodyPaddingRight":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"children":["this.htmlText_10683A91_0832_6024_4194_ED15777CDCEF"],"shadowSpread":1,"shadowVerticalLength":0,"closeButtonRollOverBorderSize":0,"closeButtonBorderRadius":11,"titleFontSize":"1.29vmin","footerBackgroundColorRatios":[0,0.8980392156862745,1],"titlePaddingTop":5,"backgroundColor":[],"closeButtonBorderColor":"#000000","footerHeight":5,"headerBorderColor":"#000000","minHeight":0,"headerBorderSize":0,"shadowOpacity":0.5,"bodyBackgroundOpacity":1,"verticalAlign":"middle","veilColorRatios":[0,1],"minWidth":0,"class":"Window"},{"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"playbackBarLeft":0,"progressBackgroundColor":["#000000"],"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadHeight":15,"toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBorderRadius":2,"toolTipPaddingTop":4,"vrPointerColor":"#FFFFFF","width":"100%","toolTipPaddingLeft":6,"firstTransitionDuration":0,"height":"100%","progressBottom":10,"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadow":true,"id":"MainViewer","subtitlesFontSize":"3vmin","progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","progressHeight":2,"progressLeft":"33%","playbackBarBottom":5,"subtitlesTop":0,"progressBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":2,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"progressOpacity":0.7,"progressRight":"33%","toolTipShadowColor":"#333138","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowColor":"#000000","playbackBarRight":0,"toolTipBorderColor":"#767676","vrPointerSelectionTime":2000,"subtitlesGap":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderRadius":0,"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","playbackBarBackgroundOpacity":1,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"subtitlesBackgroundColor":"#000000","minHeight":50,"toolTipFontFamily":"Arial","minWidth":100,"class":"ViewerArea","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1A13DECC_0836_603D_4170_5D75898FBCD2","camera":"this.panorama_1A13DECC_0836_603D_4170_5D75898FBCD2_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"scrollBarHorizontalMargin":-3,"data":{"name":"HTMLText3671"},"paddingLeft":10,"propagateClick":false,"paddingRight":10,"height":"100%","scrollBarColor":"#000000","scrollBarVisible":"always","width":"100%","html":trans('htmlText_10683A91_0832_6024_4194_ED15777CDCEF.html'),"paddingTop":10,"backgroundOpacity":0,"paddingBottom":10,"minHeight":0,"id":"htmlText_10683A91_0832_6024_4194_ED15777CDCEF","minWidth":0,"class":"HTMLText"}],"backgroundColor":["#FFFFFF"],"scripts":{"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"disableVR":TDV.Tour.Script.disableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"translate":TDV.Tour.Script.translate,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"toggleVR":TDV.Tour.Script.toggleVR,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"clone":TDV.Tour.Script.clone,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"enableVR":TDV.Tour.Script.enableVR,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizStart":TDV.Tour.Script.quizStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"init":TDV.Tour.Script.init,"resumePlayers":TDV.Tour.Script.resumePlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlays":TDV.Tour.Script.getOverlays,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentByName":TDV.Tour.Script.getComponentByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"createTween":TDV.Tour.Script.createTween,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"openLink":TDV.Tour.Script.openLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPixels":TDV.Tour.Script.getPixels,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"minHeight":0,"id":"rootPlayer","minWidth":0,"class":"Player","defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Thu Nov 7 2024