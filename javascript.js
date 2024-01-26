console.log("JavaScript successfully loaded!");

function NewTabMessage(cityName) {
    console.log(`Opening ${cityName} website in new tab...`);
}

const fileName = location.href.split("/").slice(-1); 
const fileNameExists = fileName && fileName[0];

// Only run query selectors if necessary to reduce memory usage
if (fileNameExists && fileName[0].includes("index")) {
    console.log("Initializing table link functionality...");

    try {
        // Initialize "non-link" links on index.html
        document.querySelector("#raleigh-link").addEventListener("click", (e) => {
            e.preventDefault();

            NewTabMessage("Raleigh");

            window.open("https://raleighnc.gov/", "_blank");
        });

        document.querySelector("#charlotte-link").addEventListener("click", (e) => {
            e.preventDefault();

            NewTabMessage("Charlotte");

            window.open("https://charlottenc.gov/", "_blank");
        });

        document.querySelector("#greensboro-link").addEventListener("click", (e) => {
            e.preventDefault();

            NewTabMessage("Greensboro");

            window.open("https://greensboro-nc.gov/", "_blank");
        });

        document.querySelector("#asheville-link").addEventListener("click", (e) => {
            e.preventDefault();

            NewTabMessage("Asheville");

            window.open("https://ashevillenc.gov/", "_blank");
        });

        document.querySelector("#wilmington-link").addEventListener("click", (e) => {
            e.preventDefault();

            NewTabMessage("Wilmington");

            window.open("https://wilmingtonnc.gov/", "_blank");
        });

        console.log("Done!");
    } catch (e) {
        console.log("Error intializing table link functionality. See error below for details.");

        console.log(e);
    }
}
else if (fileNameExists && fileName[0].includes("contact")) {
    document.querySelector("#btnClear").addEventListener("click", (e) => {
        e.preventDefault();

        console.log("Clearing form...");

        document.querySelector("#contact-form").reset();

        console.log("Form cleared!");
    });

    document.querySelector("#contact-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.querySelector("#first-name").value ?? "",
            lastName: document.querySelector("#last-name").value ?? "",
            email: document.querySelector("#email").value ?? "N/A",
            validateEmail: document.querySelector("#validate-email").value ?? "N/A",
            message: document.querySelector("#message").value ?? ""
        };

        if (!(formData.validateEmail === formData.email)) {
            window.alert("Emails must match.");

            return;
        }

        console.log(formData.message);

        const body = [];

        body.push(
            `Email: ${formData.email}\n`,
            `Phone: ${formData.phone}\n\n`,
            formData.message
        )

        const mailToURL = new URL("mailto:acoo633@wgu.edu");

        mailToURL.searchParams.append("subject", `NC Contact Request From ${formData.lastName}, ${formData.firstName}`);
        mailToURL.searchParams.append("body", body.join(""));

        window.open(mailToURL);

        location.reload();
    });
}
