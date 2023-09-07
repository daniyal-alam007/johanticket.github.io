$(document).ready(function() {
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next, input[name='vbtn-radio']").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).closest('fieldset');
        next_fs = current_fs.next();

        // Check if all required fields in the current step are filled
        var requiredFields = current_fs.find('.required');
        var allFieldsFilled = true;
        requiredFields.each(function() {
            if (!this.checkValidity()) {
                allFieldsFilled = false;
                // You can display an error message here if needed
                return false; // Exit the loop early if a field is invalid
            }
        });

        if (allFieldsFilled) {
            // Activate next step on the progress bar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            // Show the next fieldset
            next_fs.show();
            // Hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
            $(".modal").modal('hide');
        } else {
            // Display an error message or provide feedback to the user
            // You can customize this part to suit your needs
            alert("Please fill in all required fields.");
            animating = false; // Prevent animation if fields are not filled
        }
    });

    $(".previous").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).closest('fieldset');
        previous_fs = current_fs.prev();

        // De-activate current step on the progress bar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        // Show the previous fieldset
        previous_fs.show();
        // Hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });
});

       

        // Quantity Increase and Decrease button
        function increaseValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('number').value = value;
        }

        function decreaseValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            document.getElementById('number').value = value;
        }

        function increaseValue1() {
            var value = parseInt(document.getElementById('number1').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('number1').value = value;
        }

        function decreaseValue1() {
            var value = parseInt(document.getElementById('number1').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            document.getElementById('number1').value = value;
        }

        function increaseValue2() {
            var value = parseInt(document.getElementById('number2').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('number2').value = value;
        } 

        function decreaseValue2() {
            var value = parseInt(document.getElementById('number2').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            document.getElementById('number2').value = value;
        }
        
        
        //Terms and Conditions Agree Checkbox

               // Get the checkbox element
               const checkbox = document.querySelector("#agree");

               // Get the button element
               const button = document.querySelector("#submit");
       
               // Define a function to check the checkbox status 
               const checkStatus = () => {
                   // If the checkbox is checked, enable the button
                   if (checkbox.checked) {
                       button.disabled = false;
                   }
                   // Otherwise, disable the button
                   else {
                       button.disabled = true;
                   }
               }
       
               // Add an event listener to the checkbox to call the function on change
               checkbox.addEventListener("change", checkStatus);
       
               // Do something when the button is clicked
               button.addEventListener("click", () => {
                   alert("Submitted!");
               });