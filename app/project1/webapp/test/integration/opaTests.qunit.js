sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/PAN_Details_APRList',
		'project1/test/integration/pages/PAN_Details_APRObjectPage'
    ],
    function(JourneyRunner, opaJourney, PAN_Details_APRList, PAN_Details_APRObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePAN_Details_APRList: PAN_Details_APRList,
					onThePAN_Details_APRObjectPage: PAN_Details_APRObjectPage
                }
            },
            opaJourney.run
        );
    }
);