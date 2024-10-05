 $(document).ready(function() {
            // Εφαρμογή του Select2
            $('#page-select').select2();

                var selectedValue = $(this).val();
                $('#selected-value').text('Επιλέξατε: ' + selectedValue);
          
        });
