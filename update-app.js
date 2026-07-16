/*
Recipe Buddy automatic update checker
*/

let refreshing = false;

function showUpdateMessage(registration) {
    const shouldUpdate = confirm(
        "A new Recipe Buddy update is available. Update now?"
    );

    if (shouldUpdate && registration.waiting) {
        registration.waiting.postMessage({
            type: "SKIP_WAITING"
        });
    }
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(function (registration) {

                /*
                Check GitHub for a newer service worker
                whenever the app opens.
                */
                registration.update();

                /*
                An update has already downloaded and
                is waiting to activate.
                */
                if (registration.waiting) {
                    showUpdateMessage(registration);
                }

                /*
                Watch for a newly downloaded update.
                */
                registration.addEventListener(
                    "updatefound",
                    function () {
                        const newWorker =
                            registration.installing;

                        if (!newWorker) {
                            return;
                        }

                        newWorker.addEventListener(
                            "statechange",
                            function () {
                                if (
                                    newWorker.state ===
                                        "installed" &&
                                    navigator.serviceWorker
                                        .controller
                                ) {
                                    showUpdateMessage(
                                        registration
                                    );
                                }
                            }
                        );
                    }
                );
            })
            .catch(function (error) {
                console.log(
                    "Service worker registration failed:",
                    error
                );
            });
    });

    /*
    Reload the app once after the new service
    worker takes control.
    */
    navigator.serviceWorker.addEventListener(
        "controllerchange",
        function () {
            if (refreshing) {
                return;
            }

            refreshing = true;
            window.location.reload();
        }
    );
}