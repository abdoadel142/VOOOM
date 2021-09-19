let title = document.getElementById("title");
let select = document.getElementById("languages");
let content = document.getElementById("hf");
let contactUs = document.getElementById("contact");
let social = document.getElementById("social_ic");
let copyright = document.getElementById("copyright");
select.onclick= ()=>{
    setLanugage(select.value);
}


onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};


function setLanugage(getLanuage){
    if(getLanuage === "arabic"){
        title.innerHTML = "الشروط و الأحكام";
        content.dir = "rtl";
        title.dir = "rtl";
        contactUs.dir = "rtl";
        social.dir = "rtl";
        copyright.dir = "rtl";
      content.innerHTML = "    عزيزي العميل, يسرنا دائما أن نقدم خدمة أفضل و أكثر تطور لك, لذا يجب التنويه على الآتي استخدامك لهذا التطبيق إقرارعلى موافقتك بالشروط و الأحكام الحاليه و أي تغيير قد يطرق عليها يتوجب التوقف عن إستخدام تطبيق ڤوووم في حالة مخالفتك للممارسه القانونيه لهذا التطبيق أو استخدام بطرق غير مشروعه و مخالفه للقانون المحلي و الدولي كما يعتبر إقرار منك بأنك لن تحاول التأثيرأو اختراق أيا من وسائل التواصل الخاصه بنا متابعة إستخدامك لهذه المنصة إقرار على عدم إساءة إستخدام المنصة أو خرق القوانين, جميع السلع التي سيتم عرضها أو شراءها يجب أن تكون مصرح بها و غير ممنوعة التداول, عدم التعامل مع السائقين خارج سياق الخدمة أو التطبيق حيث تخلي الشركة مسئوليتها كاملة عن أي أعمال مخالفه أو نصب أو إحتيال في هذه الحالة و سيتم فصل السائق عن الخدمة كما تقر ب إفادتنا بالمعلومات اللازمه و الصحيحه عند تسجيل الدخول و أن جميع المعلومات المستخدمه من قبلك هي مسئوليتك كاملة و أن لا مسئولية لنا بها.. في حالة وجود مشكلة في المعلومات برجاء إرسال شكوتك على info@vooomapp.com تطبيق ڤوووم يخلي مسئوليته عن أي إعلان يظهر خلال إستخدامك للتطبيق و يعد مسئولية المعلن لمزيد من المعلومات لا تترد في التواصل معنا من خلال مراسلتنا";
      contactUs.innerHTML = "تواصل معنا عبر " + ": ";
      copyright.innerHTML = "حقوق النشر 2021 | صمم بواسطه فوووم"
    }else if(getLanuage ==="english"){
        title.innerHTML = "Terms & Conditions";
        content.dir = "ltr";
        title.dir = "ltr";
        contactUs.dir = "ltr";
        social.dir = "ltr";
        copyright.dir = "ltr";
        content.innerHTML = "•Dear valued customers, kindly note that the following rules & regulations are a contract by which you abide to its rules by registering to our service & using it.  Kindly read it carefully before agreeing. - Registering & using this application declares your agreement on the terms of use that manages this  application as well as using the application after any modifications or edits later on declares your acceptance on it; kindly delete your account in case of non acceptance - Vooom s services is only available for lawful purposes, users are not allowed to breach national or international law in any way using this platform. You also agree not to access without authority , damage or disrupt any part of our Site or any network used in the provision of our Services -You also declare that you will not use this platform for any unethical or unlawful usage, you will not sell or buy legally banned products through us as it will be count as fraud. You may not issue any sort of a relationship with the vendors or couriers or work privately; the company will not be responsible for sort of harm or fraud that may occur in this case and the courier will be dismissed. -You declare to provide us with all the registration confidential information required. This information must be valid & true. -You declare that all of your account s information, login or activity settings is your own responsibility & we do not take responsibility for any of it. In case of any concerns about your login details or you think they have been misused, contact us at info@vooomapp.com immediately to aid you with support. -Vooom is not responsible for ads that appear during the use of the application or any third party associated with the application as they represent their own terms & conditions. -For further inquiries, do not hesitate to contact us on info@vooomapp.com or Contact us form link redirect";
        contactUs.innerHTML = "Connect with us :"
        copyright.innerHTML = "Copyright @2021 | Designed By VOOOM"

    }

    }



