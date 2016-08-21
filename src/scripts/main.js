$(document).ready(function() {
    $('body').removeClass('no-js');

    var $homeButton = $('.section__intro--button'),
        $homeTitle = $('.section__intro--title'),
        $homeParagraphe = $('.section__intro--paragraphe'),
        $homeQuote = $('.section__intro--quote'),
        $homePage = $('.section__intro'),
        $homeProgressBar = $('.progress-bar');

    home = new TimelineLite();

    home.staggerFromTo($homeTitle, 1.5, {
        autoAlpha: 0,
        y: '+=60'
    }, {
        autoAlpha: 1,
        y: '0',
        ease: Expo.easeOut
    }, '+=10')

    home.staggerFromTo($homeParagraphe, 1.1, {
        autoAlpha: 0,
        y: '+=30'
    }, {
        autoAlpha: 1,
        y: '0',
        ease: Expo.easeOut
    }, '+=10')

    home.staggerFromTo($homeButton, 1, {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        ease: Expo.easeOut
    })

    home.from($homeQuote, 0, {
        autoAlpha: 0
    })

    home.from($homeProgressBar, 0, {
        height: '0'
    });

    $('.section__intro--button').on('click', function() {

        home.addLabel("homeStart", "0")
        home.staggerFromTo($homeButton, 1, {
            autoAlpha: 1,
        }, {
            autoAlpha: 0,
            ease: Expo.easeOut
        }, "homeStart")

        home.staggerFromTo($homeParagraphe, 1, {
            autoAlpha: 1,
            y: '0'
        }, {
            autoAlpha: 0,
            y: '+=20',
            ease: Expo.easeOut
        }, "homeStart")

        home.staggerFromTo($homeTitle, 1, {
            y: '0',
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            y: '+=40',
            ease: Expo.easeOut
        }, "homeStart")

        home.to($homeQuote, 1, {
            autoAlpha: 1
        }, '-=.2')

        home.to($homeProgressBar, 5.5, {
            height: '100%'
        })

        home.to($homeQuote, 1, {
            autoAlpha: 0
        })

        home.to($homeProgressBar, 1, {
            autoAlpha: .6
        }, '-=1')

        home.staggerFromTo($homePage, 1, {
            autoAlpha: 1,
        }, {
            force3D: true,
            width: '0%',
            ease: Expo.easeOut
        })

        home.staggerFromTo($homePage, 1, {
            autoAlpha: 1,
        }, {
            force3D: true,
            height: '0%',
            ease: Expo.easeOut
        })

        home.to($homePage, 0, {
            autoAlpha: 0,
            css: {
                zIndex: '-1'
            }
        });

        setTimeout(function() {
            $('.section__intro').fadeOut('slow');
        }, 20000);
        $('main').fadeIn();
        $('.help').fadeIn().delay(20000).fadeOut('slow');
    });

    var $aboutButton = $('.section__about--button'),
        $aboutTitle = $('.section__about--title'),
        $aboutParagraphe = $('.section__about--paragraphe'),
        $aboutPage = $('.section__about');

    $('.header__link--about').on('click', function() {

        about = new TimelineLite();

        about.to($aboutPage, 0, {
            css: {
                zIndex: '350'
            }
        })

        about.staggerFromTo($aboutPage, 1, {
            autoAlpha: 1,
            height: '0'
        }, {
            autoAlpha: 1,
            force3D: true,
            height: '100%',
            ease: Expo.easeOut
        })

        about.staggerFromTo($aboutPage, 1, {
            width: '0',
            left: '75%'
        }, {
            force3D: true,
            left: '0',
            width: '100%',
            ease: Expo.easeOut
        })

        about.staggerFromTo($aboutTitle, 1, {
            autoAlpha: 0,
            y: '+=40',
            ease: Expo.easeOut
        }, {
            autoAlpha: 1,
            y: '0'
        })

        about.staggerFromTo($aboutParagraphe, 1, {
            autoAlpha: 0,
            y: '+=20',
            ease: Expo.easeOut
        }, {
            autoAlpha: 1,
            y: '0'
        })

        about.staggerFromTo($aboutButton, 1, {
            autoAlpha: 0,
            ease: Expo.easeOut
        }, {
            autoAlpha: 1
        })

    });

    $('.section__about--button').on('click', function() {

        about = new TimelineLite();

        about.staggerFromTo($aboutButton, 1, {
            autoAlpha: 1
        }, {
            ease: Expo.easeOut,
            autoAlpha: 0
        })

        about.staggerFromTo($aboutParagraphe, 1, {
            autoAlpha: 1,
            y: '0'
        }, {
            autoAlpha: 0,
            y: '+=20',
            ease: Expo.easeOut
        })

        about.staggerFromTo($aboutTitle, 1, {
            autoAlpha: 1,
            y: '0'
        }, {
            autoAlpha: 0,
            y: '+=40',
            ease: Expo.easeOut
        })

        about.staggerFromTo($aboutPage, 1, {
            force3D: true,
            width: '100%',
            left: '0',
            ease: Expo.easeOut
        }, {
            width: '0',
            left: '75%'
        })

        about.staggerFromTo($aboutPage, 1, {
            autoAlpha: 1,
            force3D: true,
            height: '100%',
            ease: Expo.easeOut
        }, {
            autoAlpha: 1,
            height: '0'
        })

        about.to($aboutPage, 0, {
            css: {
                zIndex: '-1'
            }
        })
    });

    var $navWidth = $('nav'),
        $navSlide = $('.nav__block'),
        $navOl1 = $('.link--item1'),
        $navOl2 = $('.link--item2'),
        $navOl3 = $('.link--item3'),
        $navOl4 = $('.link--item4'),
        $navTitle = $('.nav__block--title'),
        $navTextFade = $('.nav__list--link'),


        menuToggle = new TimelineLite({
            paused: true,
            reversed: true
        });

    menuToggle.addLabel("listStart", "+=.7")
    menuToggle.to($navWidth, 0.01, {
        css: {
            zIndex: 10
        }
    })
    menuToggle.staggerFromTo($navSlide, .7, {
        width: '0%',
    }, {
        width: '100%',
        ease: Expo.easeInOut
    }, '-=2')

    menuToggle.staggerFrom($navOl1, 0.4, {
        x: '-=50',
        force3D: true,
        autoAlpha: 0,
        ease: Circ.easeOut
    }, .17, "listStart")

    menuToggle.staggerFrom($navOl2, 0.4, {
        x: '-=50',
        force3D: true,
        autoAlpha: 0,
        ease: Circ.easeOut
    }, .17, "listStart")

    menuToggle.staggerFrom($navOl3, 0.4, {
        x: '-=50',
        force3D: true,
        autoAlpha: 0,
        ease: Circ.easeOut
    }, .17, "listStart")

    menuToggle.staggerFrom($navOl4, 0.4, {
        x: '-=50',
        force3D: true,
        autoAlpha: 0,
        ease: Circ.easeOut
    }, .17, "listStart");

    $('.header__btn--menu').on('click', function() {
        $('.header__btn--menu').toggleClass('on');
        menuToggle.reversed() ? menuToggle.play() : menuToggle.reverse();
    });

    $('.nav__list--link').on('click', function() {
        $('.header__btn--menu').toggleClass("on");
        menuToggle.reversed() ? menuToggle.play() : menuToggle.reverse();
    });

    $('.nav__block--title').on('click', function() {
        $('.header__btn--menu').toggleClass("on");
        menuToggle.reversed() ? menuToggle.play() : menuToggle.reverse();
    });

    // Point Animation
    var $point = $('.point'),
        $pointBuild = ('.point--build'),
        $pointReloadAnim = ('#pointReload'),

        point = new TimelineLite();

    point.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })

    point.staggerFromTo($point, 2, {
        autoAlpha: 0,
        scale: .4,
        ease: Back.easeOut.config(1.3)
    }, {
        autoAlpha: 1,
        scale: .1,
        ease: Back.easeOut.config(1.3)
    })

    point.staggerFrom($pointBuild, 0.5, {
        autoAlpha: 0
    });

    point.to($pointReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#pointReload").on('click', function() {
        point.restart();
    });

    // Ligne Animation
    var $ligneLine = ('.ligne'),
        $ligneEllipse1 = ('.section__ligne--ellipse-1'),
        $ligneEllipse2 = ('.section__ligne--ellipse-2'),
        $ligneRotation = ('.ligne__effect--rotation'),
        $ligneReloadAnim = ('#ligneReload'),

        ligne = new TimelineLite();

    ligne.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    ligne.addLabel("ligneStart", "0")
    ligne.staggerFromTo($ligneEllipse1, 1, {
        autoAlpha: 0.1,
    }, {
        left: '10%',
        autoAlpha: 1,
        force3D: true
    }, 0, "ligneStart")

    ligne.staggerFromTo($ligneEllipse2, 1, {
        autoAlpha: 0.1,
    }, {
        left: '90%',
        autoAlpha: 1,
        force3D: true
    }, 0, "ligneStart")

    ligne.staggerFromTo($ligneLine, 1, {
        width: '0%'
    }, {
        width: '75%',
    }, 0.5)

    ligne.to($ligneReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#ligneReload").on('click', function() {
        ligne.restart();
    });

    // Surface Animation

    var $surfaceEllipse1 = $('.section__surface--ellipse-1'),
        $surfaceEllipse2 = $('.section__surface--ellipse-2'),
        $surfaceEllipse3 = $('.section__surface--ellipse-3'),
        $surfaceEllipse4 = $('.section__surface--ellipse-4'),
        $surfacePlan = $('.surface'),
        $surfaceReloadAnim = ('#surfaceReload'),

        surface = new TimelineLite();

    surface.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    surface.addLabel("surfaceStartX", "+=0.2")
    surface.addLabel("surfaceStartY", "+=0.2")
    surface.to($surfaceEllipse1, 1, {
        left: '30%'
    }, 0, "surfaceStartX")
    surface.to($surfaceEllipse2, 1, {
        left: '30%'
    }, 0, "surfaceStartX")
    surface.to($surfaceEllipse3, 1, {
        left: '70%'
    }, 0, "surfaceStartX")
    surface.to($surfaceEllipse4, 1, {
        left: '70%'
    }, 0, "surfaceStartX")


    surface.to($surfaceEllipse1, 1, {
        top: '84%'
    }, 1, "surfaceStartY")
    surface.to($surfaceEllipse2, 1, {
        top: '15.5%'
    }, 1, "surfaceStartY")
    surface.to($surfaceEllipse3, 1, {
        top: '15.5%'
    }, 1, "surfaceStartY")
    surface.to($surfaceEllipse4, 1, {
        top: '84%'
    }, 1, "surfaceStartY")

    surface.staggerFromTo($surfacePlan, 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })

    surface.to($surfaceReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#surfaceReload").on('click', function() {
        surface.restart();
    });

    // Structure-formelle Animation
    var $structureFormelleEllipse1 = $('.section--structure-formelle--ellipse-1'),
        $structureFormelleEllipse2 = $('.section--structure-formelle--ellipse-2'),
        $structureFormelleEllipse3 = $('.section--structure-formelle--ellipse-3'),
        $structureFormelleEllipse4 = $('.section--structure-formelle--ellipse-4'),
        $structureFormelleEllipse5 = $('.section--structure-formelle--ellipse-5'),
        $structureFormelleEllipse6 = $('.section--structure-formelle--ellipse-6'),
        $structureFormelleEllipse7 = $('.section--structure-formelle--ellipse-7'),
        $structureFormelleEllipse8 = $('.section--structure-formelle--ellipse-8'),
        $structureFormelleEllipse9 = $('.section--structure-formelle--ellipse-9'),
        $stf = $('.stf-ellipse'),
        $structureFormelleBuild = $('.structure-formelle--build'),
        $structureFormelleTitle1 = $('.structure-formelle__title-1'),
        $structureFormelleTitle2 = $('.structure-formelle__title-2'),
        $structureFormelleReloadAnim = ('#structureFormelleReload'),

        structureFormelle = new TimelineLite();

    structureFormelle.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    structureFormelle.from($structureFormelleTitle1, .5, {
        autoAlpha: 0
    })

    structureFormelle.from($stf, .7, {
        scale: 0
    })

    structureFormelle.from($structureFormelleTitle1, 1, {
        autoAlpha: 1
    }, 2)

    structureFormelle.to($structureFormelleTitle1, 1, {
        autoAlpha: 0
    })

    structureFormelle.addLabel("structureFormelleStart", "+=0.1")
    structureFormelle.to($structureFormelleEllipse1, 1.5, {
        left: '20%',
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse2, 1.5, {
        left: '20%',
        top: '20%',
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse3, 1.5, {
        top: '20%',
        left: '50%'
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse4, 1.5, {
        left: '80%',
        top: '20%',
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse5, 1.5, {
        left: '80%',
        top: '50%'
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse6, 1.5, {
        left: '80%',
        top: '80%',
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse7, 1.5, {
        top: '80%',
        left: '50%'
    }, "structureFormelleStart")

    structureFormelle.to($structureFormelleEllipse8, 1.5, {
        left: '20%',
        top: '80%',
    }, "structureFormelleStart")

    structureFormelle.staggerFromTo($structureFormelleTitle2, 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })

    structureFormelle.staggerFromTo($structureFormelleBuild, 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 0.2
    })

    structureFormelle.to($structureFormelleReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#structureFormelleReload").on('click', function() {
        structureFormelle.restart();
    });

    // Gradation Animation

    var $gradationEllipse1 = $('.section__gradation--ellipse-1'),
        $gradationEllipse2 = $('.section__gradation--ellipse-2'),
        $gradationEllipse3 = $('.section__gradation--ellipse-3'),
        $gradationEllipse4 = $('.section__gradation--ellipse-4'),
        $gradationEllipse5 = $('.section__gradation--ellipse-5'),
        $gradationEllipse6 = $('.section__gradation--ellipse-6'),
        $gradationAll = $('.gradation'),
        $gradationTitle1 = $('.gradation__title-1'),
        $gradationTitle2 = $('.gradation__title-2'),
        $gradationReloadAnim = ('#gradationReload'),

        gradation = new TimelineLite();
    gradation.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    gradation.from($gradationAll, 0, {
        width: '0'
    })
    gradation.staggerFromTo($gradationTitle1, .5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
    gradation.to($gradationEllipse1, .5, {
        width: '5%'
    })
    gradation.to($gradationEllipse2, .5, {
        width: '20%'
    })
    gradation.to($gradationEllipse3, .5, {
        width: '35%'
    })
    gradation.to($gradationEllipse4, .5, {
        width: '50%'
    })
    gradation.to($gradationEllipse5, .5, {
        width: '65%'
    })
    gradation.to($gradationEllipse6, .5, {
        width: '80%'
    })
    gradation.to($gradationTitle1, 1, {
        autoAlpha: 0
    })
    gradation.staggerFromTo($gradationTitle2, .5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
    gradation.to($gradationEllipse1, .5, {
        width: '10%'
    })
    gradation.to($gradationEllipse2, .5, {
        width: '15%'
    })
    gradation.to($gradationEllipse3, .5, {
        width: '23%'
    })
    gradation.to($gradationEllipse4, .5, {
        width: '37%'
    })
    gradation.to($gradationEllipse5, .5, {
        width: '55%'
    })

    gradation.to($gradationReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#gradationReload").on('click', function() {
        gradation.restart();
    });


    // Structure-non-formelle Animation

    var $structureNonFormelleEllipse1 = $('.section--structure-non-formelle--ellipse-1'),
        $structureNonFormelleEllipse2 = $('.section--structure-non-formelle--ellipse-2'),
        $structureNonFormelleEllipse3 = $('.section--structure-non-formelle--ellipse-3'),
        $structureNonFormelleEllipse4 = $('.section--structure-non-formelle--ellipse-4'),
        $structureNonFormelleEllipse5 = $('.section--structure-non-formelle--ellipse-5'),
        $structureNonFormelleEllipse6 = $('.section--structure-non-formelle--ellipse-6'),
        $structureNonFormelleEllipse7 = $('.section--structure-non-formelle--ellipse-7'),
        $structureNonFormelleEllipse8 = $('.section--structure-non-formelle--ellipse-8'),
        $structureNonFormelleEllipse9 = $('.section--structure-non-formelle--ellipse-9'),
        $structureNonFormelleBuild = $('.structure-non-formelle--build'),
        $structureNonFormelleTitle1 = $('.structure-non-formelle__title-1'),
        $structureNonFormelleTitle2 = $('.structure-non-formelle__title-2'),
        $stnf = $('.stnf-ellipse'),
        $structureNonFormelleReloadAnim = ('#structureNonFormelleReload'),

        structureNonFormelle = new TimelineLite();

    structureNonFormelle.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    structureNonFormelle.staggerFromTo($structureNonFormelleTitle1, .5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
    structureNonFormelle.from($stnf, 0.5, {
        scale: .5
    }, 1)


    structureNonFormelle.addLabel("structureNonFormelleStart", "+=0.2")
    structureNonFormelle.to($structureNonFormelleTitle1, 1, {
        autoAlpha: 0
    })

    structureNonFormelle.staggerFromTo($structureNonFormelleTitle2, .5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
    structureNonFormelle.to($structureNonFormelleEllipse1, 1.2, {
        left: '32%',
        top: '68%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse2, 1.2, {
        left: '74%',
        top: '82%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse3, 1.2, {
        top: '42%',
        left: '15%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse4, 1.2, {
        left: '65%',
        top: '65%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse5, 1.2, {
        left: '80%',
        top: '20%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse6, 1.2, {
        left: '78%',
        top: '38%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse7, 1.2, {
        top: '80%',
        left: '44%'
    }, "structureNonFormelleStart")

    structureNonFormelle.to($structureNonFormelleEllipse8, 1.2, {
        left: '38%',
        top: '15%',
    }, "structureNonFormelleStart")

    structureNonFormelle.from($structureNonFormelleBuild, 1, {
        autoAlpha: 0
    })

    structureNonFormelle.to($structureNonFormelleReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#structureNonFormelleReload").on('click', function() {
        structureNonFormelle.restart();
    });


    // Taille Animation

    var $tailleEllipse1 = $('.section--taille--ellipse-1'),
        $tailleEllipse2 = $('.section--taille--ellipse-2'),
        $tailleReloadAnim = ('#tailleReload'),

        taille = new TimelineMax();
    taille.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    taille.staggerFromTo($tailleEllipse2, 1.8, {
        scale: 0
    }, {
        scale: 1,
        ease: Sine.easeOut
    }, .01)
    taille.staggerFromTo($tailleEllipse1, 1.2, {
        autoAlpha: .5,
        top: '0',
        left: '50%'
    }, {
        autoAlpha: 1,
        top: '76%',
        left: '50%',
        ease: Bounce.easeOut
    })

    taille.to($tailleReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#tailleReload").on('click', function() {
        taille.restart();
    });

    // Couleurs Animation

    var $couleursLine = $('.section__couleurs--lines'),
        $couleursLine2 = $('.section__couleurs--lines-2'),
        $couleursEllipse1 = $('.section__couleurs--ellipse-1'),
        $couleursEllipse2 = $('.section__couleurs--ellipse-2'),
        $couleursFade = $('.couleurs-fade'),
        $couleursTitle1 = $('.couleurs__title-1'),
        $couleursTitle2 = $('.couleurs__title-2'),
        $couleursTitle3 = $('.couleurs__title-3'),
        $couleursReloadAnim = ('#couleursReload'),

        couleurs = new TimelineLite();
        couleurs.from($couleursTitle1, 0, {
            autoAlpha: 0
        })
        // couleurs.from($couleursTitle2, 0, {
        //     autoAlpha: 0
        // })
    couleurs.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })

    couleurs.to($couleursTitle1, 1, {
        autoAlpha: 1
    })
    couleurs.from($couleursLine, 2, {
        autoAlpha: 0,
        top: '10%',
        left: '-10%'
    })
    couleurs.from($couleursEllipse1, 2, {
        autoAlpha: 0
    }, '-=2')
    couleurs.to($couleursTitle1, 2, {
        autoAlpha: 0
    }, '-=1')

    couleurs.to($couleursEllipse2, 2, {
        autoAlpha: 1,
        top: '60%',
        left: '50%'
    })
    couleurs.to($couleursTitle2, 2, {
        autoAlpha: 1
    }, '-=2.5')
    couleurs.to($couleursLine2, 2, {
        autoAlpha: 1,
    }, '-=.2')
    couleurs.to($couleursTitle2, 2, {
        autoAlpha: 0
    }, '-=2')
    couleurs.to($couleursFade, 1, {
        autoAlpha: .3
    })
    couleurs.to($couleursTitle3, 1, {
        autoAlpha: 1
    }, '-=1')
    couleurs.to($couleursReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#couleursReload").on('click', function() {
        couleurs.restart();
    });

    // Repetition Animation

    var $repetitionTitle1 = $('.repetition__title-1'),
        $repetitionMmFreq1 = $('.section__repetition--mmFreq1'),
        $repetitionMmFreq2 = $('.section__repetition--mmFreq2'),
        $repetitionMmFreq3 = $('.section__repetition--mmFreq3'),
        $repetitionMmFreq4 = $('.section__repetition--mmFreq4'),

        $repetitionTitle2 = $('.repetition__title-2'),
        $repetitionPasMmFreq1 = $('.section__repetition--not-mmFreq1'),
        $repetitionPasMmFreq2 = $('.section__repetition--not-mmFreq2'),
        $repetitionPasMmFreq3 = $('.section__repetition--not-mmFreq3'),
        $repetitionPasMmFreq4 = $('.section__repetition--not-mmFreq4'),
        $repetitionPasMmFreq5 = $('.section__repetition--not-mmFreq5'),

        $repetitionTitle3 = $('.repetition__title-3'),
        $repetitionRythme1 = $('.section__repetition--rythme1'),
        $repetitionRythme2 = $('.section__repetition--rythme2'),
        $repetitionRythme3 = $('.section__repetition--rythme3'),
        $repetitionRythme4 = $('.section__repetition--rythme4'),
        $repetitionRythme5 = $('.section__repetition--rythme5'),
        $repetitionRythme6 = $('.section__repetition--rythme6'),
        $repetitionReloadAnim = ('#repetitionReload'),

        repetition = new TimelineLite();

    repetition.to($repetitionTitle1, .5, {
        autoAlpha: 1
    })
    repetition.to($repetitionMmFreq4, 1.5, {
        autoAlpha: 1,
        left: '90%'
    })
    repetition.to($repetitionMmFreq1, .5, {
        autoAlpha: 1
    }, '-=1.5')
    repetition.to($repetitionMmFreq2, .5, {
        autoAlpha: 1
    }, '-=1.2')
    repetition.to($repetitionMmFreq3, .5, {
        autoAlpha: 1
    }, '-=.9')


    repetition.to($repetitionTitle2, .5, {
        autoAlpha: 1
    })
    repetition.to($repetitionPasMmFreq5, 1.5, {
        autoAlpha: 1,
        left: '90%'
    })
    repetition.to($repetitionPasMmFreq1, .5, {
        autoAlpha: 1
    }, '-=1.5')
    repetition.to($repetitionPasMmFreq2, .5, {
        autoAlpha: 1
    }, '-=1.3')
    repetition.to($repetitionPasMmFreq3, .5, {
        autoAlpha: 1
    }, '-=1.25')
    repetition.to($repetitionPasMmFreq4, .5, {
        autoAlpha: 1
    }, '-=.8')


    repetition.to($repetitionTitle3, .5, {
        autoAlpha: 1
    })
    repetition.to($repetitionRythme6, 1.5, {
        autoAlpha: 1,
        left: '90%'
    })
    repetition.to($repetitionRythme1, .5, {
        autoAlpha: 1
    }, '-=1.5')
    repetition.to($repetitionRythme2, .5, {
        autoAlpha: 1
    }, '-=1.42')
    repetition.to($repetitionRythme3, .5, {
        autoAlpha: 1
    }, '-=1.15')
    repetition.to($repetitionRythme4, .5, {
        autoAlpha: 1
    }, '-=1.05')
    repetition.to($repetitionRythme5, .5, {
        autoAlpha: 1
    }, '-=.6')

    repetition.to($repetitionReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#repetitionReload").on('click', function() {
        repetition.restart();
    });

    // Miroir Animation

    var $miroirEllipse1 = $('.section--miroir--ellipse-1'),
        $miroirEllipse2 = $('.section--miroir--ellipse-2'),
        $miroirLine = $('.section__miroir--line'),
        $miroirReloadAnim = ('#miroirReload'),

        miroir = new TimelineMax();

    miroir.from($miroirReloadAnim, .5, {
        autoAlpha: 0
    })

    miroir.to($miroirEllipse1, 1, {
        left: '30%',
        ease: Elastic.easeOut.config(1, .5)
    })
    miroir.to($miroirEllipse2, 1, {
        left: '70%',
        ease: Elastic.easeOut.config(1, .5)
    }, '-=1')

    miroir.to($miroirEllipse1, 1, {
        top: '25%',
        left: '28%',
        ease: Elastic.easeOut.config(1, .5)
    })
    miroir.to($miroirEllipse2, 1, {
        top: '25%',
        left: '72%',
        ease: Elastic.easeOut.config(1, .5)
    }, '-=1')

    miroir.to($miroirEllipse1, 1, {
        top: '75%',
        left: '40%',
        ease: Elastic.easeOut.config(1, .5)
    })
    miroir.to($miroirEllipse2, 1, {
        top: '75%',
        left: '60%',
        ease: Elastic.easeOut.config(1, .5)
    }, '-=1')

    miroir.to($miroirEllipse1, 1, {
        top: '50%',
        ease: Elastic.easeOut.config(1, .5)
    })
    miroir.to($miroirEllipse2, 1, {
        top: '50%',
        ease: Elastic.easeOut.config(1, .5)
    }, '-=1')

    miroir.to($miroirEllipse1, 1, {
        left: '45%',
        ease: Bounce.easeOut
    })
    miroir.to($miroirEllipse2, 1, {
        left: '55%',
        ease: Bounce.easeOut
    }, '-=1')

    miroir.to($miroirReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#miroirReload").on('click', function() {
        miroir.restart();
    });



    // Rotation Animation

    var $rotationEllipse1 = $('.section__rotation--ellipse-1'),
        $rotationEllipse2 = $('.section__rotation--ellipse-2'),

        rotation = new TimelineMax();

    var rotation2 = new TimelineMax({
        repeat: -1
    });
    rotation.staggerFromTo($rotationEllipse2, 1, {
        scale: 0
    }, {
        scale: 1,
        ease: Power3.easeOut
    })

    rotation.staggerFromTo($rotationEllipse1, 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })

    rotation2.to($rotationEllipse1, 7, {
        rotation: 360,
        ease: Power0.easeNone
    })

    // Agrandir-Reduire Animation

    var $agrandirRetrecir = $('.section__agrandir-retrecir--ellipse'),

        agrandirRetrecir = new TimelineMax({
            repeat: -1
        });

    agrandirRetrecir.to($agrandirRetrecir, 1, {
        width: '40%',
        ease: Back.easeOut.config(1.3)
    }, 1)

    agrandirRetrecir.to($agrandirRetrecir, 1, {
        width: '10%',
        ease: Back.easeOut.config(1.3)
    }, 3);

    // Direction Animation

    var $direction = $('.direction'),
        $directionBuild = $('.direction--build'),
        $directionReloadAnim = ('#directionReload'),

        direction = new TimelineLite();
    direction.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    direction.from($directionBuild, .6, {
        width: '0',
    })

    direction.from($direction, .6, {
        x: '-=60',
        autoAlpha: 0,
        ease: Back.easeOut.config(1.3)
    }, 0.5)

    direction.to($directionReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#directionReload").on('click', function() {
        direction.restart();
    });

    // Attraction Animation

    var $attractionEllipse1 = $('.section__attraction--ellipse-1'),
        $attractionEllipse2 = $('.section__attraction--ellipse-2'),
        $attractionEllipse3 = $('.section__attraction--ellipse-3'),
        $attractionEllipse4 = $('.section__attraction--ellipse-4'),
        $attractionEllipse5 = $('.section__attraction--ellipse-5'),

        attraction = new TimelineMax({
            repeat: -1
        });

    attraction.addLabel("attractionStart", "0")
    attraction.to($attractionEllipse1, 1.5, {
        scale: .5,
        ease: Elastic.easeOut.config(1, 0.5)
    }, "attractionStart")
    attraction.to($attractionEllipse1, 1.5, {
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.5)
    })

    attraction.to($attractionEllipse2, 1.5, {
        top: '40%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, "attractionStart")
    attraction.to($attractionEllipse2, 1.5, {
        top: '20%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, '-=1.5')

    attraction.to($attractionEllipse3, 1.5, {
        left: '40%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, "attractionStart")
    attraction.to($attractionEllipse3, 1.5, {
        left: '21%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, '-=1.5')

    attraction.to($attractionEllipse4, 1.5, {
        top: '50%',
        left: '44%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, "attractionStart")
    attraction.to($attractionEllipse4, 1.5, {
        top: '40%',
        left: '25%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, '-=1.5')

    attraction.to($attractionEllipse5, 1.5, {
        top: '43%',
        left: '51%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, "attractionStart")
    attraction.to($attractionEllipse5, 1.5, {
        top: '25%',
        left: '40%',
        ease: Elastic.easeOut.config(1, 0.5)
    }, '-=1.5');

    // Symetrie Animation

    var $symetrieRect1 = $('.section--symetrie-rect-1'),
        $symetrieRect2 = $('.section--symetrie-rect-2'),
        $symetrieBuild = $('.symetrie--build'),
        $symetrieReloadAnim = ('#symetrieReload'),

        symetrieAsymetrie = new TimelineLite();
    symetrieAsymetrie.from($symetrieBuild, 1, {
        width: '0',
        ease: Power4.easeOut,
    })

    symetrieAsymetrie.to($symetrieRect1, 3, {
        force3D: true,
        autoAlpha: 1,
        top: '32.5%',
        rotation: 225,
        ease: Elastic.easeOut.config(1, 1.2)
    }, .8)

    symetrieAsymetrie.to($symetrieRect2, 3, {
        force3D: true,
        autoAlpha: 1,
        top: '67.5%',
        rotation: -225,
        ease: Elastic.easeOut.config(1, 1.2)
    }, .8)

    symetrieAsymetrie.to($symetrieReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#symetrieReload").on('click', function() {
        symetrieAsymetrie.restart();
    });

    // Balance Animation

    var $balanceEllipse1 = $('.section__balance--ellipse-1'),
        $balanceEllipse2 = $('.section__balance--ellipse-2'),
        $balanceTitle1 = $('.balance__title-1'),
        $balanceTitle2 = $('.balance__title-2'),
        $balanceReloadAnim = $('#balanceReload'),

        balance = new TimelineLite();
    balance.from($pointReloadAnim, 0, {
        autoAlpha: 0
    })
    balance.to($balanceTitle1, 2, {
        autoAlpha: 1
    })

    balance.to($balanceTitle1, 2, {
        autoAlpha: 0
    })

    balance.to($balanceTitle2, 2, {
        autoAlpha: 1
    })

    balance.to($balanceEllipse1, 2, {
        autoAlpha: 1,
        width: '55%',
        left: '40%',
        ease: Back.easeOut.config(1.3)
    }, 2)
    balance.to($balanceEllipse2, 2, {
        autoAlpha: 1,
        top: '80%',
        left: '80%',
        ease: Back.easeOut.config(1.3)
    }, '-=4')

    balance.to($balanceReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#balanceReload").on('click', function() {
        balance.restart();
    });

    // Groupes Animation

    var $groupesEllipse1 = $('.section--groupes--ellipse-1'),
        $groupesEllipse2 = $('.section--groupes--ellipse-2'),
        $groupesEllipse3 = $('.section--groupes--ellipse-3'),
        $groupesEllipse4 = $('.section--groupes--ellipse-4'),
        $groupesEllipse5 = $('.section--groupes--ellipse-5'),
        $groupesBuild = $('.groupes--build'),
        $groupeTitle1 = $('.groupes__title-1'),
        $groupesReloadAnim = ('#groupesReload'),

        groupes = new TimelineLite();
    groupes.from($pointReloadAnim, .5, {
        autoAlpha: 0
    })
    groupes.to($groupesEllipse1, 0.6, {
        top: '25%'
    })
    groupes.to($groupesEllipse2, 0.6, {
        top: '45%',
        left: '75%'
    })
    groupes.to($groupesEllipse3, 0.6, {
        top: '75%',
        left: '67%'
    });
    groupes.to($groupesEllipse4, 0.6, {
        top: '75%',
        left: '33%'
    })
    groupes.to($groupesEllipse5, 0.6, {
        top: '45%',
        left: '25%'
    })
    groupes.from($groupesBuild, 1, {
        autoAlpha: 0
    })
    groupes.to($groupeTitle1, 1, {
        autoAlpha: 1
    })

    groupes.to($groupesReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#groupesReload").on('click', function() {
        groupes.restart();
    });

    // Position Animation

    var $positionEllipse1 = $('.section__position--ellipse-1'),
        $positionEllipse2 = $('.section__position--ellipse-2'),
        $positionTitle1 = $('.position__title-1'),
        $positionTitle2 = $('.position__title-2'),
        $positionTitle3 = $('.position__title-3'),
        $positionReloadAnim = ('#positionReload'),

        position = new TimelineLite();
    position.to($positionTitle3, 1, {
        autoAlpha: 0
    }, '+=.5')
    position.from($positionEllipse2, .5, {
        autoAlpha: 0,
        scale: 0
    })
    position.from($positionEllipse1, 1, {
        autoAlpha: 0
    }, '-=3')
    position.to($positionTitle1, 1.5, {
        autoAlpha: 1
    })
    position.to($positionTitle1, 1.5, {
        autoAlpha: 0
    })
    position.to($positionEllipse2, 1, {
        top: '20%'
    })
    position.to($positionTitle2, 1, {
        autoAlpha: 1
    })

    position.to($positionReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#positionReload").on('click', function() {
        position.restart();
    });

    // Espace Animation

    var $espaceEllipse1 = $('.section--espace--ellipse-1'),
        $espaceEllipse2 = $('.section--espace--ellipse-2'),
        $espaceEllipse3 = $('.section--espace--ellipse-3'),
        $espaceEllipse4 = $('.section--espace--ellipse-4'),
        $espaceEllipse5 = $('.section--espace--ellipse-5'),
        $espaceBuild = $('.espace--build-circle'),
        $espaceTitle1 = $('.espace__title-1'),
        $espaceTitle2 = $('.espace__title-2'),
        $espaceReloadAnim = ('#espaceReload'),

        espace = new TimelineLite();


    espace.from($espaceReloadAnim, .5, {
        autoAlpha: 0
    })
    espace.from($espaceBuild, 1, {
        scale: 0
    })
    espace.to($espaceTitle1, .5, {
        autoAlpha: 1
    }, '-=1')
    espace.to($espaceTitle1, .5, {
        autoAlpha: 0
    }, '+=1')
    espace.to($espaceTitle2, .5, {
        autoAlpha: 1
    })
    espace.from($espaceEllipse1, 1, {
        scale: 0,
        ease: Back.easeOut.config(1)
    }, '-=1')
    espace.from($espaceEllipse2, 1, {
        scale: 0,
        ease: Back.easeOut.config(1)
    }, '-=.2')
    espace.from($espaceEllipse3, 1, {
        scale: 0,
        ease: Back.easeOut.config(1)
    }, '-=.8')
    espace.from($espaceEllipse4, 1, {
        scale: 0,
        ease: Back.easeOut.config(1)
    }, '-=1')
    espace.from($espaceEllipse5, 1, {
        scale: 0,
        ease: Back.easeOut.config(1)
    }, '-=1.1')
    espace.to($espaceReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#espaceReload").on('click', function() {
        espace.restart();
    });
    // Parallele Animation

    var $paralleleRect1 = $('.section__parallele--rect-1'),
        $paralleleRect2 = $('.section__parallele--rect-2'),
        $paralleleBuild = $('.parallele--build'),
        $paralleleBuild2 = $('.parallele--build-2'),
        $paralleleTitle1 = $('.parallele__title-1'),
        $paralleleTitle2 = $('.parallele__title-2'),
        $paralleleReloadAnim = ('#paralleleReload'),

        parallele = new TimelineLite();
    parallele.from($paralleleReloadAnim, .5, {
        autoAlpha: 0
    })
    parallele.addLabel("paralleleStart", "0"),
        parallele.addLabel("paralleleStart2", "+=7")

    parallele.from($paralleleTitle1, 1, {
        autoAlpha: 0
    })
    parallele.from($paralleleRect1, 1, {
        autoAlpha: 0,
    }, "paralleleStart")
    parallele.from($paralleleRect2, 1, {
        autoAlpha: 0
    }, "paralleleStart")
    parallele.to($paralleleRect1, 1, {
        rotation: 10
    }, "paralleleStart")
    parallele.to($paralleleBuild2, 1, {
        autoAlpha: 1
    })
    parallele.to($paralleleBuild2, 1, {
        autoAlpha: 0
    })
    parallele.to($paralleleTitle1, 1, {
        autoAlpha: 0
    })
    parallele.to($paralleleRect1, 1, {
        rotation: 0
    })
    parallele.to($paralleleTitle2, 1, {
        autoAlpha: 1
    })
    parallele.to($paralleleBuild, 1, {
        autoAlpha: 1
    })
    parallele.to($paralleleRect1, 1, {
        autoAlpha: .5
    }, "paralleleStart2")

    parallele.to($paralleleRect2, 1, {
        autoAlpha: .5
    }, "paralleleStart2")

    parallele.to($paralleleReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#paralleleReload").on('click', function() {
        parallele.restart();
    });

    // Tangente Animation

    var $tangenteBuild = $('.tangente--build'),
        $tangenteEllipse1 = $('.section__tangente--ellipse-1'),
        $tangenteEllipse2 = $('.section__tangente--ellipse-2'),
        $tangenteReloadAnim = ('#tangenteReload'),

        tangente = new TimelineLite();

    tangente.addLabel("tangenteStart", "0"),
        tangente.addLabel("tangenteStart2", "+=2.4")
    tangente.from($tangenteEllipse1, 1, {
        autoAlpha: 0,
        top: '80%',
        left: '20%'
    }, "tangenteStart")
    tangente.from($tangenteEllipse2, 1, {
        autoAlpha: 0,
        top: '20%',
        left: '80%'
    }, "tangenteStart")
    tangente.from($tangenteBuild, 1, {
        autoAlpha: 0
    }, "-=.18")

    tangente.to($tangenteEllipse1, 1, {
        autoAlpha: .5
    }, "tangenteStart2")
    tangente.to($tangenteEllipse2, 1, {
        autoAlpha: .5
    }, "tangenteStart2")

    tangente.to($tangenteReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#tangenteReload").on('click', function() {
        tangente.restart();
    });

    // influence Animation

    var $influenceRect12 = $('.section__influence--rect12'),
        $influenceRect22 = $('.section__influence--rect22'),
        $influenceEllipse = $('.section__influence--ellipse-1'),
        $influenceTitle = $('.influence--title'),
        $influenceReloadAnim = ('#influenceReload'),

        influence = new TimelineLite();

    influence.from($influenceReloadAnim, .5, {
        autoAlpha: 0
    })

    influence.to($influenceEllipse, 1, {
        width: '15.8%',
        height: '35%'
    }, '+=.1')
    influence.to($influenceRect12, 1, {
        left: '30%'
    }, '-=1.2')
    influence.to($influenceRect22, 1, {
        left: '70%'
    }, '-=1.2')

    influence.to($influenceTitle, 1, {
        autoAlpha: 1
    })

    influence.to($influenceEllipse, 1, {
        width: '30%',
        height: '30%',
        ease: Elastic.easeOut.config(1, .3)
    })
    influence.to($influenceRect12, 1, {
        left: '20%',
        ease: Back.easeOut.config(3)

    }, '-=1.2')
    influence.to($influenceRect22, 1, {
        left: '80%',
        ease: Back.easeOut.config(3)
    }, '-=1.2')

    influence.to($influenceReloadAnim, .5, {
        autoAlpha: 1
    })

    $("#influenceReload").on('click', function() {
        influence.restart();
    });

    function playAnimation(name) {
        name.restart();
    }

    // Load fullpage.js
    $('main').fullpage({
        continuousVertical: true,
        afterLoad: function(anchorLink) {
            playAnim(anchorLink);
        }
    });

    function playAnim(anchorLink) {
        playAnimation(point);
        playAnimation(ligne);
        playAnimation(surface);
        playAnimation(structureFormelle);
        playAnimation(gradation);
        playAnimation(structureNonFormelle);
        playAnimation(taille);
        playAnimation(couleurs);
        playAnimation(repetition);
        playAnimation(miroir);
        playAnimation(rotation);
        playAnimation(agrandirRetrecir);
        playAnimation(direction);
        playAnimation(attraction);
        playAnimation(symetrieAsymetrie);
        playAnimation(balance);
        playAnimation(groupes);
        playAnimation(position);
        playAnimation(espace);
        playAnimation(parallele);
        playAnimation(tangente);
        playAnimation(influence);
    }
});
