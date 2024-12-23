function diagnose() {
    const age = document.getElementById('age').value;
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const conditions = document.getElementById('conditions').value;

    let diagnosis = '';

    // Hypertension levels based on blood pressure
    if (systolic >= 180 || diastolic >= 120) {

        diagnosis = 'کریز هایپرتنشن: نیازمند افدامات اورژانسی: با 115 تماس بگیرید';
    } else if (systolic >= 140 || diastolic >= 90) {
        diagnosis = 'فشار خون بالا ،درجه ی دوم:  جهت تنظیم دوز داروی مصرفی در اسرع وقت به پزشک خانواده ی خود مراجعه فرمایید ';
    } else if (systolic >= 130 || diastolic >= 80) {
        diagnosis = 'فشار خون بالا ،درجه ی اول:  جهت اصلاح شیوه ی زندگی و رژیم غذایی و ورزش  به پزشک خانواده ی خود مراجعه فرمایید ';
    } else if (systolic >= 120 && diastolic < 80) {
        diagnosis = 'شما مستعد به بیماری فشار خون بالا هستید. لطفا جهت یادگیری اقدامات پیشگیرانه به پزشک خود مراجعه فرمایید';
    } else {
        diagnosis = ' فشار خون شما طبیعی است.';
    }

    // Adjust diagnosis for age and pre-existing conditions
    if (age >= 60 && diagnosis.includes('Hypertension')) {
        diagnosis += ' شما با توجه به سن تان نیازمند بررسی بیشتر توسط پزشک و انجام آزمایشات غربالگری هستید';
    }

    if (conditions === 'دیابت' || conditions === 'بیماری های قلبی') {
        diagnosis += '   توجه داشته باشید که بیماری های زمینه ای مانند' + conditions.replace('_', ' ') + ' ،ریسک ابتلا به فشار خون را افزایش میدهد';
    }

    document.getElementById('result').innerText = diagnosis;
}

 
