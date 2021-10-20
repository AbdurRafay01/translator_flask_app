

var languages = ['Arabic', 'Urdu', 'English', 'Pushto', 'Macedonian', 'Chinese', 'Malay', 'Ahramaic', 'Japanese', 'Sindhi', 'Balochi',
                'Turkish', 'Persian'];

var inp1_clicked = false;
var inp2_clicked = false;


function show_languages(text_box_id, languages, inp_clicked) {
    // console.log(900);
    main_elem = document.getElementById(text_box_id);
    if (inp_clicked) {
        return
    } else {
        
    if (text_box_id == "lang1_input") {
        inp1_clicked = true
    } else{
        inp2_clicked = true
    }

    langs_list = document.createElement("DIV");
    langs_list.setAttribute("class", "autocomplete-list");
    langs_list.setAttribute("id", "autocomplete-list-id" + text_box_id);

    for (let index = 0; index < languages.length; index++) {
        // console.log(languages[index])
        single_lang = document.createElement("DIV");
        // single_lang.setAttribute("id", 'optionbox' + text_box_id)
        // single_lang = document.getElementById('optionbox' + text_box_id)
        single_lang.innerHTML = languages[index];
        single_lang.innerHTML += '<input type="hidden" value="'+ languages[index] +'">'

        single_lang.addEventListener('click', function () {
            main_elem.value = languages[index];
            hide_languages(text_box_id);
            // console.log(languages[index]);
        });

        // main_elem.addEventListener('focusout', hide_languages)
        langs_list.appendChild(single_lang);
    }
    main_elem.parentNode.appendChild(langs_list);
}
}

function hide_languages(text_box_id) {

    main_elem = document.getElementById("autocomplete-list-id" + text_box_id);
    main_elem.remove();
    
    if (text_box_id == "lang1_input") {
        inp1_clicked = false
    } else{
        inp2_clicked = false
    }
}


document.getElementById("lang1_input").addEventListener("click", function(){show_languages('lang1_input', languages, inp1_clicked)})
document.getElementById("lang2_input").addEventListener("click", function(){show_languages('lang2_input', languages, inp2_clicked)})
// document.getElementById("lang2_input").addEventListener("click", show_languages)