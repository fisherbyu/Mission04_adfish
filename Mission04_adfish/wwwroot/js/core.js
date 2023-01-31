var totalGrade = "Hello";


$('#calc_grade_submit').click(function () {

    let assWeight = 0.50;
    let gpWeight = 0.10;
    let quizWeight = 0.10;
    let midtermWeight = 0.10;
    let finalWeight = 0.10;
    let INTEXWeight = 0.10;

    let INTEXGrade = parseFloat($('#intex_Input').val()) * INTEXWeight;
    let finalGrade = parseFloat($('#final_Input').val()) * finalWeight;
    let midtermGrade = parseFloat($('#midterm_Input').val()) * midtermWeight;
    let quizGrade = parseFloat($('#quiz_Input').val()) * quizWeight;
    let gpGrade = parseFloat($('#gp_Input').val()) * gpWeight;
    let assGrade = parseFloat($('#assignments_Input').val()) * assWeight;

    let totalGrade = INTEXGrade + finalGrade + midtermGrade + quizGrade + gpGrade + assGrade;

    $('#output').text(totalGrade.toFixed(2) + "% is your Expected Final Grade");
});
