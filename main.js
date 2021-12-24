var name_of_students_array=[];
function submit(){
 var display_student_array=[];
   for (i = 0; i <= 4; i++) {
       var name_of_student = document.getElementById("input"+i).value;
       console.log(name_of_student);
       name_of_students_array.push(name_of_student);
   }
   
   console.log(name_of_students_array);
   var length_of_the_name_of_the_student_array = name_of_students_array.length;
   console.log(length_of_the_name_of_the_student_array);

   for (d = 0; d < length_of_the_name_of_the_student_array; d++) {
       display_student_array.push("<h4>Name" + "-" + name_of_students_array[d] + "</h4>");
    }
   console.log(display_student_array);
 
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;
   var remove_commas = display_student_array.join("");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
  



   document.getElementById("but").style.display = "none";
   doucment.getElementById("me").style.display = "inline-block";
    }
function sort(){
   
name_of_students_array.sort();
 console.log(name_of_students_array);
 var display_name_array_sorted = [""];
 var length_of_the_name_of_the_student_array = name_of_students_array.length;
 console.log(length_of_the_name_of_the_student_array);

 for (z = 0; z < length_of_the_name_of_the_student_array; z++) {
     display_student_array_sorted.push("<h4>Name" + "-" + name_of_students_array[z] + "</h4>");
     console.log(display_name_array_sorted);
  }
 console.log(display_student_array);

 var remove_commas = display_student_array_sorted.join("");
 console.log(remove_commas);
 document.getElementById("display_name_without_commas").innerHTML=remove_commas;
 
 
}