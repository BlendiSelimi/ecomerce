$('.dropdown-menu1').on( 'click', 'a', function() {
    var text = $(this).html();
    var htmlText = text + ' <span class="caret"></span>';
    $(this).closest('.dropdown1').find('.dropdown-toggle').html(htmlText);
});

$("#phoneNumber").intlTelInput({
    separateDialCode: true,
    initialCountry: "auto", // Automatically detect the user's country
    geoIpLookup: function(callback) {
      // You can use a third-party service to look up the user's location based on their IP address
      // Replace the URL below with the appropriate service
      $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
  });

  function validatePhoneNumber() {
    // Get the selected country code and formatted phone number
    const selectedCountryData = $("#phoneNumber").intlTelInput('getSelectedCountryData');
    const selectedCountryCode = selectedCountryData.dialCode;
    const formattedPhoneNumber = $("#phoneNumber").intlTelInput('getNumber');
  }
  let countriesData = {
            "United States": { code: "US", currency: "USD" },
            "United Kingdom": { code: "UK", currency: "GBP" },
            "India": { code: "IN", currency: "INR" },
            "Canada": { code: "CA", currency: "CAD" },
            "Australia": { code: "AU", currency: "AUD" }
            // Add more countries and data as needed
        };

        function changeCountry() {
            // Get the country from the input field
            let countryInput = document.getElementById("countryInput").value;

            // Get the country data based on the input
            let countryData = countriesData[countryInput];

            // Display the entered country or show an error if it's not in the list
            if (countryData) {
                document.getElementById("displayedCountry").innerText = countryInput;
                displayCountryDetails(countryData);
            } else {
                document.getElementById("displayedCountry").innerText = "Unknown";
                alert("Please enter a valid country from the list.");
            }
        }

        function displayCountryDetails(countryData) {
            // Display additional details about the selected country
            let details = "Country Code: " + countryData.code + ", Currency: " + countryData.currency;
            alert(details);
        }