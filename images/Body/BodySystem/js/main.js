$(window).ready(updateHeight);				// sets my 16x9 ratio 
$(window).resize(updateHeight);

function updateHeight()
{
	var appwrap = $('#appwrapper');
	var width = (appwrap.width()*.5625);

	appwrap.css('height' , width);

	dragwidth = $("#dragbox").height();
    $("#dragbox").css('width' , dragwidth);

    slotwidth = $("#glowing_slot").height();
    $("#dropslot1 #glowing_slot").css('width' , slotwidth);
    $("#dropslot2 #glowing_slot").css('width' , slotwidth);
    $("#dropslot3 #glowing_slot").css('width' , slotwidth);

    magwidth = $(".magnify_glass").height();
    $(".magnify_glass").css('width' , magwidth);
}
											// variables to check current active layer
var skin_selected = true;
var muscle_selected = false;
var bone_selected = false;

var front_view_active = true;  				// variables to check current view of the body
var back_view_active = false;



											// check to see which view is toggled (front or back)
$("#icon_frontview").click(function() { 

	$('#change_layers')[0].play();

	front_view_active = true;  				
    back_view_active = false;
    $("#icon_frontview").css("background-image", "url(images/icon_frontskin_selected.png)");
    $("#icon_backview").css("background-image", "url(images/icon_backskin.png)");    

   

			if (skin_selected == true && front_view_active == true)     
				
				{
					$("#bodycontainer").css("background-image", "url(images/frontskin.png)"); 
				}
			else if (muscle_selected == true && front_view_active == true)   
				{
					$("#bodycontainer").css("background-image", "url(images/frontmuscle.png)");  
					$("#front_glowing_overlays").show(); 
				}

			else if (bone_selected == true && front_view_active == true)    
				{
					$("#bodycontainer").css("background-image", "url(images/frontskeleton.png)");
					$("#front_glowing_overlays").hide();
					$("#back_glowing_overlays").hide();  
				}
	
});

$("#icon_backview").click(function() {

	$('#change_layers')[0].play();

	front_view_active = false;  				
    back_view_active = true;
    $("#icon_backview").css("background-image", "url(images/icon_backskin_selected.png)");  
    $("#icon_frontview").css("background-image", "url(images/icon_frontskin.png)");

    		if (skin_selected == true && back_view_active == true)     
				
				{
					$("#bodycontainer").css("background-image", "url(images/backskin.png)"); 
				}
			else if (muscle_selected == true && back_view_active == true)   
				{
					$("#bodycontainer").css("background-image", "url(images/backmuscle.png)"); 
					$("#back_glowing_overlays").show(); 
				}

			else if (bone_selected == true && back_view_active == true)    
				{
					$("#bodycontainer").css("background-image", "url(images/backskeleton.png)");
					$("#front_glowing_overlays").hide();
					$("#back_glowing_overlays").hide();  
				} 
});


			

	



$(document).ready(function() {                //// MAGNIFY
			var scaleNum = 2;
			$(".magnify").jfMagnify();
			
			$('.magnify_glass').animate({
				'top':'40%',
				'left':'70%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});
		});


											///// magnifying glass toggle with on/off 

	var magnifying_glass_on = true;
										

$('#magnifying_toggle').click(function() {

	$('#standard_click')[0].play();

	magnifying_glass_on = !magnifying_glass_on;
	console.log(magnifying_glass_on);

	if (magnifying_glass_on == true)     
				
				{
		
					$('#magnifying_toggle').css("background-image", "url(images/mag_selected.png)");
					$('.magnify_glass').show();	
					
					
				}

	if (magnifying_glass_on == false)     
				
				{
		
					$('#magnifying_toggle').css("background-image", "url(images/mag_unselected.png)");
					$('.magnify_glass').hide();	
					
					
				}

});


//////////////////////////////// toggle front and back overlays //////

$("#back_glowing_overlays").hide();

$("#icon_backview").click(function() {

  if(selectedlayer != 3){
	
	$("#front_glowing_overlays").hide();
	$("#back_glowing_overlays").show();
   }
});

$("#icon_frontview").click(function() {

  if(selectedlayer != 3){
	$("#front_glowing_overlays").show();
	$("#back_glowing_overlays").hide();
   }
});

////////////////////////////////////////// Change info and images based on muscle clicks //////////////////

$("#quad_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'40%',
				'left':'20%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});
    
    if (english == true)
    {	
		$("#part_info").text("The quadriceps are large four-headed muscles on the front and sides of the thigh consisting of the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius that comes down the the bone of the upper leg (femur), goes over the knee cap (patella) and anchors into the top of the lower leg (tibia). The function of the quadriceps is to extend the leg.");
		$("#part_title").text("QUADRICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/quads.png)"); 
    }
    if (spanish == true)
    {	
		$("#part_info").text("Los cuádriceps son grandes músculos de cuatro cabezas que descienden por el hueso de la parte superior de la pierna (fémur), pasa sobre la rodilla (rótula) y anclas en la parte superior de la pierna (tibia). La función del cuadriceps es extender la pierna.");
		$("#part_title").text("CUADRÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/quads.png)"); 
    }
});

$("#quad_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'40%',
				'left':'55%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {	
		$("#part_info").text("The quadriceps are large four-headed muscles on the front and sides of the thigh consisting of the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius that comes down the the bone of the upper leg (femur), goes over the knee cap (patella) and anchors into the top of the lower leg (tibia). The function of the quadriceps is to extend the leg.");
		$("#part_title").text("QUADRICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/quads.png)"); 
    }
    if (spanish == true)
    {	
		$("#part_info").text("Los cuádriceps son grandes músculos de cuatro cabezas que descienden por el hueso de la parte superior de la pierna (fémur), pasa sobre la rodilla (rótula) y anclas en la parte superior de la pierna (tibia). La función del cuadriceps es extender la pierna.");
		$("#part_title").text("CUADRÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/quads.png)"); 
    }
});

$("#bicep_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'40%',
				'left':'2%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {	
		$("#part_info").text("The biceps are muscles on the front part of the upper arm. The bicep includes a “short head” and a “long head” that work as a single muscle. The bicep is attached to the arm bones by tough connective tissues called tendons. The tendons that connect the bicep muscle to the shoulder joint in two places are called the proximal biceps tendons. The tendon that attaches the bicep muscle to the forearm bones (radius and ulna) is called the distal biceps tendon. When the bicep contracts, it pulls the forearm up and rotates it outward.");
		$("#part_title").text("BICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/biceps.png)"); 
    }
    if (spanish == true)
    {	
		$("#part_info").text("Los bíceps son músculos en la parte delantera de la parte superior del brazo. El bíceps incluye una cabeza corta y una cabeza larga que funcionan como un solo músculo. El bíceps se une a los huesos del brazo por los tejidos conectivos resistentes llamados tendones. Los tendones que conectan el músculo bíceps a la articulación del hombro en dos lugares se llaman los tendones proximales del bíceps. El tendón que une el músculo bíceps con los huesos del antebrazo (radio y cúbito) se denomina tendón distal del bíceps. Cuando el bicep se contrae, tira del antebrazo y lo gira hacia afuera.");
		$("#part_title").text("BÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/biceps.png)"); 
    }
});

$("#bicep_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'40%',
				'left':'70%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {	
		$("#part_info").text("The biceps are muscles on the front part of the upper arm. The bicep includes a “short head” and a “long head” that work as a single muscle. The bicep is attached to the arm bones by tough connective tissues called tendons. The tendons that connect the bicep muscle to the shoulder joint in two places are called the proximal biceps tendons. The tendon that attaches the bicep muscle to the forearm bones (radius and ulna) is called the distal biceps tendon. When the bicep contracts, it pulls the forearm up and rotates it outward.");
		$("#part_title").text("BICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/biceps.png)"); 
    }
    if (spanish == true)
    {	
		$("#part_info").text("Los bíceps son músculos en la parte delantera de la parte superior del brazo. El bíceps incluye una cabeza corta y una cabeza larga que funcionan como un solo músculo. El bíceps se une a los huesos del brazo por los tejidos conectivos resistentes llamados tendones. Los tendones que conectan el músculo bíceps a la articulación del hombro en dos lugares se llaman los tendones proximales del bíceps. El tendón que une el músculo bíceps con los huesos del antebrazo (radio y cúbito) se denomina tendón distal del bíceps. Cuando el bicep se contrae, tira del antebrazo y lo gira hacia afuera.");
		$("#part_title").text("BÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/biceps.png)"); 
    }
});

$("#pec_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$(".magnify").jfMagnify();
			
			$('.magnify_glass').animate({
				'top':'35%',
				'left':'20%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});


	if (english == true)
    {	
		$("#part_info").text("The pectorals consist of the pectoralis major and pectoralis minor. The pectoralis major is a large triangular muscle that extends from the sternum to the humerus and functions to flex, horizontally adduct, and internally rotate the arm. The pectoralis minor is a muscle beneath the pectoralis major, attached to the coracoid process of the scapula  that depresses as well as causes anterior tipping of the scapula.");
		$("#part_title").text("PECTORALIS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/pecs.png)"); 
	}
	if (spanish == true)
    {	
		$("#part_info").text("Los pectorales consisten en el pectoral mayor y el pectoral menor. El pectoral mayor es un músculo triangular grande que se extiende desde el esternón hasta el húmero y funciona para flexionar, aduccionar horizontalmente y rotar internamente el brazo. El pectoral menor es un músculo por debajo del pectoral mayor, unido al proceso coracoideo de la escápula que deprime así como provoca la inclinación anterior de la escápula.");
		$("#part_title").text("PECTORALIS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/pecs.png)");
	}
});

$("#pec_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$(".magnify").jfMagnify();
			
			$('.magnify_glass').animate({
				'top':'35%',
				'left':'55%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {	
		$("#part_info").text("The pectorals consist of the pectoralis major and pectoralis minor. The pectoralis major is a large triangular muscle that extends from the sternum to the humerus and functions to flex, horizontally adduct, and internally rotate the arm. The pectoralis minor is a muscle beneath the pectoralis major, attached to the coracoid process of the scapula  that depresses as well as causes anterior tipping of the scapula.");
		$("#part_title").text("PECTORALIS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/pecs.png)");
	}
	if (spanish == true)
    {	
		$("#part_info").text("Los pectorales consisten en el pectoral mayor y el pectoral menor. El pectoral mayor es un músculo triangular grande que se extiende desde el esternón hasta el húmero y funciona para flexionar, aduccionar horizontalmente y rotar internamente el brazo. El pectoral menor es un músculo por debajo del pectoral mayor, unido al proceso coracoideo de la escápula que deprime así como provoca la inclinación anterior de la escápula.");
		$("#part_title").text("PECTORALIS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/pecs.png)");
	}
});

$("#abs_overlay").click(function() {

	$('#click_bodyparts')[0].play();

	$(".magnify").jfMagnify();
			
			$('.magnify_glass').animate({
				'top':'15%',
				'left':'37%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The abdominal muscles are a large group of muscles consisting of the transversus abdominis, rectus abdominis, external obliques, and internal obliques in the front of the abdomen that assist in the regular breathing movement and support for the muscles of the spine while lifting. They also serve in protecting and keeping abdominal organs such as the intestines in place.");
		$("#part_title").text("ABDOMINALS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/abs.png)"); 
	}

	if (spanish == true)
    {
		$("#part_info").text("Los músculos abdominales son un gran grupo de músculos en la parte frontal del abdomen que ayudan en el movimiento de la respiración regular y apoya los músculos de la columna vertebral mientras se levanta. También sirven para proteger y mantener órganos abdominales tales como los intestinos en su lugar.");
		$("#part_title").text("ABDOMINALES");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/abs.png)"); 
	}
});

$("#tricep_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'43%',
				'left':'0%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The triceps are a three-headed muscle attached to the back up the upper arm bone (humerus) and the outer edge of the shoulder-blade (scapula). The triceps run down the back of the arm to be inserted by a strong tendon into the curved process on the back of one of the two forearm bones (ulna). The triceps muscle straightens the elbow in opposition to the biceps muscle, which bends it.");
		$("#part_title").text("TRICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/triceps.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("Los tríceps son un músculo de tres cabezas unido a la parte superior del hueso del brazo superior (húmero) y el borde exterior de la omoplata (escápula). Los tríceps corren por la parte posterior del brazo para ser insertados por un tendón fuerte en el proceso curvo en la parte posterior de uno de los dos huesos del antebrazo (cúbito). El músculo tríceps endereza el codo en oposición al músculo bíceps, que lo dobla.");
		$("#part_title").text("TRÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/triceps.png)");
	}
});

$("#tricep_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'43%',
				'left':'75%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});


	if (english == true)
    {
		$("#part_info").text("The triceps are a three-headed muscle attached to the back up the upper arm bone (humerus) and the outer edge of the shoulder-blade (scapula). The triceps run down the back of the arm to be inserted by a strong tendon into the curved process on the back of one of the two forearm bones (ulna). The triceps muscle straightens the elbow in opposition to the biceps muscle, which bends it.");
		$("#part_title").text("TRICEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/triceps.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("Los tríceps son un músculo de tres cabezas unido a la parte superior del hueso del brazo superior (húmero) y el borde exterior de la omoplata (escápula). Los tríceps corren por la parte posterior del brazo para ser insertados por un tendón fuerte en el proceso curvo en la parte posterior de uno de los dos huesos del antebrazo (cúbito). El músculo tríceps endereza el codo en oposición al músculo bíceps, que lo dobla.");
		$("#part_title").text("TRÍCEPS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/triceps.png)");
	}
});

$("#ham_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'43%',
				'left':'18%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The medial hamstring comprises the tendons of the semimembranosus and semitendinosus muscles. The lateral hamstring is the tendon of the biceps femorismuscle. Hamstring muscles have origin from the ischial tuberosity, act across both the hip and knee joints which produce extension and flexion, respectively, and are innervated by the tibial portion of the sciatic nerve. The medial hamstring contributes to medial rotation of the leg at the flexed knee joint, whereas the lateral hamstring contributes to lateral rotation.");
		$("#part_title").text("HAMSTRINGS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/hams.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("El tendón medial de la corva comprende los tendones de los músculos semimembranosus y semitendinosus. El tendón lateral es el tendón del bíceps femoral. Los músculos isquiotibiales tienen origen en la tuberosidad isquiática, actúan a través de las articulaciones de la cadera y de la rodilla, que producen extensión y flexión, respectivamente, y son inervados por la porción tibial del nervio ciático. El músculo isquiotibial medial contribuye a la rotación medial de la pierna en la articulación flexionada de la rodilla, mientras que el músculo isquiotibial lateral contribuye a la rotación lateral.");
		$("#part_title").text("HAMSTRINGS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/hams.png)");
	}
});

$("#ham_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'43%',
				'left':'55%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The medial hamstring comprises the tendons of the semimembranosus and semitendinosus muscles. The lateral hamstring is the tendon of the biceps femorismuscle. Hamstring muscles have origin from the ischial tuberosity, act across both the hip and knee joints which produce extension and flexion, respectively, and are innervated by the tibial portion of the sciatic nerve. The medial hamstring contributes to medial rotation of the leg at the flexed knee joint, whereas the lateral hamstring contributes to lateral rotation.");
		$("#part_title").text("HAMSTRINGS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/hams.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("El tendón medial de la corva comprende los tendones de los músculos semimembranosus y semitendinosus. El tendón lateral es el tendón del bíceps femoral. Los músculos isquiotibiales tienen origen en la tuberosidad isquiática, actúan a través de las articulaciones de la cadera y de la rodilla, que producen extensión y flexión, respectivamente, y son inervados por la porción tibial del nervio ciático. El músculo isquiotibial medial contribuye a la rotación medial de la pierna en la articulación flexionada de la rodilla, mientras que el músculo isquiotibial lateral contribuye a la rotación lateral.");
		$("#part_title").text("HAMSTRINGS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/hams.png)");
	}
});

$("#glute_overlay_left").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'45%',
				'left':'18%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The gluteal muscles are a group of three muscles. These muscles makeup the buttocks and consist of the gluteus maximus muscle, gluteus medius muscle and gluteus minimus muscle. The gluteus maximus is the largest of the gluteal muscles and one of the strongestmuscles in the human body. It inserts at the iliotibial band and the glutealtuberosity of the femur. Its action is to extend and to laterally rotate the hip, and also to extend the trunk.");
		$("#part_title").text("GLUTEUS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/glutes.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("Los músculos glúteos son un grupo de tres músculos. Estos músculos forman las nalgas y consisten en el músculo glúteo máximo, músculo glúteo medio y músculo glúteo menor. El glúteo máximo es el más grande de los músculos glúteos y uno de los músculos más fuertes del cuerpo humano. Se inserta en la banda iliotibial y en la glutealtuberosidad del fémur. Su acción es extender y rotar lateralmente la cadera, y también extender el tronco.");
		$("#part_title").text("GLUTEO");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/glutes.png)");
	}
});

$("#glute_overlay_right").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'45%',
				'left':'55%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The gluteal muscles are a group of three muscles. These muscles makeup the buttocks and consist of the gluteus maximus muscle, gluteus medius muscle and gluteus minimus muscle. The gluteus maximus is the largest of the gluteal muscles and one of the strongestmuscles in the human body. It inserts at the iliotibial band and the glutealtuberosity of the femur. Its action is to extend and to laterally rotate the hip, and also to extend the trunk.");
		$("#part_title").text("GLUTEUS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/glutes.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("Los músculos glúteos son un grupo de tres músculos. Estos músculos forman las nalgas y consisten en el músculo glúteo máximo, músculo glúteo medio y músculo glúteo menor. El glúteo máximo es el más grande de los músculos glúteos y uno de los músculos más fuertes del cuerpo humano. Se inserta en la banda iliotibial y en la glutealtuberosidad del fémur. Su acción es extender y rotar lateralmente la cadera, y también extender el tronco.");
		$("#part_title").text("GLUTEO");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/glutes.png)");
	}
});

$("#traps_overlay").click(function() {

	$('#click_bodyparts')[0].play();

	$('.magnify_glass').animate({
				'top':'35%',
				'left':'37%'
				},{
				duration: 2000, 
				progress: function(){
					$(".magnify").data("jfMagnify").update();
				}, 
				easing: "easeOutElastic"
			});

	if (english == true)
    {
		$("#part_info").text("The trapezius muscles are large, flat, triangular superficial muscles of the shoulder and upper back. This muscle arises from the occipital bone, the ligamentum nuchae, and the spinous processes of the seventh cervical and all the thoracic vertebrae. The trapezius muscles act to rotate the scapula upward; adduct, raise, or lower the shoulder; and retract the shoulder.");
		$("#part_title").text("TRAPEZIUS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/traps.png)");
	}
	if (spanish == true)
    {
		$("#part_info").text("El trapecio es un músculo superficial grande, plano y triangular del hombro y parte superior de la espalda. Proviene del hueso occipital, del ligamento nucal y de los procesos espinosos de la séptima cervical y de todas las vértebras torácicas. Actúa para rotar la escápula hacia arriba; Aduccionar, elevar o bajar el hombro; Y retraer el hombro.");
		$("#part_title").text("TRAPEZIUS");
		$(".element_to_magnify").css("background-image", "url(./images/individual_parts/traps.png)");
	}
});



/////////////// SLIDER /////


var selectedlayer = 1; 


$( function() {
    $( "#boxwrap" ).draggable({
    
    snap: ".dropper",
    snapMode: "inner",
    snapTolerance: 70,
    containment: "parent" 
  })
});

  
$(".dropper").droppable({
   
    drop: function(event,ui) {
       $(".dropper").removeClass("selected");
       $(this).addClass("selected");
      
       if($("#dropslot1").hasClass("selected"))

        {
          $('#change_layers')[0].play();

          $("#dropslot1 #glowing_slot p").css("opacity" , "1");
          $("#dropslot1 #glowing_slot p").css("font-weight" , "600");

          $("#dropslot2 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot2 #glowing_slot p").css("font-weight" , "300");

          $("#dropslot3 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot3 #glowing_slot p").css("font-weight" , "300");

           if (english == true)
          {
   //              $("#dragbox").text("INTEGUMENTARY SYSTEM");
          }
          else if (spanish == true)
          {
   //              $("#dragbox").text("INTEGUMENTARIO SISTEMA");
          }
          $("#dragbox").css("fontSize", ".8vw");
   //     $("#dragbox").css("background-image", "url(images/skin.jpg)");
          selectedlayer = 1;   
          
         		 
        };
      if($("#dropslot2").hasClass("selected"))
        {
          $('#change_layers')[0].play();

          $("#dropslot2 #glowing_slot p").css("opacity" , "1");
          $("#dropslot2 #glowing_slot p").css("font-weight" , "600");

          $("#dropslot1 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot1 #glowing_slot p").css("font-weight" , "300");

          $("#dropslot3 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot3 #glowing_slot p").css("font-weight" , "300");

          if (english == true)
          {
     //     	$("#dragbox").text("MUSCULAR SYSTEM");
          }
          else if (spanish == true)
          {
    //      	$("#dragbox").text("MUSCULAR SISTEMA");
          }
          $("#dragbox").css("fontSize", "1.0vw");
    //    $("#dragbox").css("background-image", "url(images/muscle.jpg)");
          selectedlayer = 2;
          		
        };
      if($("#dropslot3").hasClass("selected"))
        {
          $('#change_layers')[0].play();

          $("#dropslot3 #glowing_slot p").css("opacity" , "1");
          $("#dropslot3 #glowing_slot p").css("font-weight" , "600");

          $("#dropslot1 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot1 #glowing_slot p").css("font-weight" , "300");

          $("#dropslot2 #glowing_slot p").css("opacity" , ".50");
          $("#dropslot2 #glowing_slot p").css("font-weight" , "300");

         if (english == true)
          {
    //      	$("#dragbox").text("SKELETAL SYSTEM");
          	$("#dragbox").css("fontSize", "1.0vw");
          }
          else if (spanish == true)
          {
    //      	$("#dragbox").text("ESQUELÉTICO SISTEMA");
          	$("#dragbox").css("fontSize", "1.0vw");
          }
    //    $("#dragbox").css("background-image", "url(images/bone.jpg)");
          selectedlayer = 3;
          		
        };

       if(selectedlayer == 1)
	{
		skin_selected = true;
		muscle_selected = false;
		bone_selected = false;
	}

	if(selectedlayer == 2)
	{
		skin_selected = false;
		muscle_selected = true;
		bone_selected = false;
	}

	if(selectedlayer == 3)
	{
		skin_selected = false;
		muscle_selected = false;
		bone_selected = true;
	}

	if (skin_selected == true && front_view_active == true)     
				
				{
					$("#bodycontainer").css("background-image", "url(images/frontskin.png)");
					
					if($("#front_glowing_overlays:visible")){
					$("#front_glowing_overlays").show();
					}  
				}
			else if (muscle_selected == true && front_view_active == true)   
				{
					$("#bodycontainer").css("background-image", "url(images/frontmuscle.png)");
					
					if($("#front_glowing_overlays:visible")){
					$("#front_glowing_overlays").show();
					} 
				}

			else if (bone_selected == true && front_view_active == true)    
				{
					$("#bodycontainer").css("background-image", "url(images/frontskeleton.png)");  
					$("#front_glowing_overlays").hide();
					$("#back_glowing_overlays").hide();
				}


	if (skin_selected == true && back_view_active == true)     
				
				{
					$("#bodycontainer").css("background-image", "url(images/backskin.png)");

					if($("#back_glowing_overlays:visible")){
					$("#back_glowing_overlays").show();
					} 
				}
			else if (muscle_selected == true && back_view_active == true)   
				{
					$("#bodycontainer").css("background-image", "url(images/backmuscle.png)"); 
					
					if($("#back_glowing_overlays:visible")){
					$("#back_glowing_overlays").show();
					}
				}

			else if (bone_selected == true && back_view_active == true)    
				{
					$("#bodycontainer").css("background-image", "url(images/backskeleton.png)");  
					$("#front_glowing_overlays").hide();
					$("#back_glowing_overlays").hide();
				}
		
    }
});


//////////// language selector ////////
var english = true;
var spanish = false;

$(".spanish").hide();
$(".english").show();

$("#container_langselect").hide();
var lang_popup = false;

$("#language_button").click(function() {

$('#standard_click')[0].play();
lang_popup = true;
$("section").css({ 'filter': 'blur(40px)'});
$("#container_langselect").show();
}); 

$(".lang_box").click(function() {

	$(".lang_box").css('background-color', 'white');
	$(".lang_box").css('color', 'black');
	$(this).css('background-color', '#2989d8');
	$(this).css('color', 'white');

}); 

$("#accept_button").click(function() {

	$('#standard_click')[0].play();
	$("section").css({ 'filter': 'blur(0px)'});
	$("#container_langselect").hide();

});

$("#lang_eng").click(function() {

 $(".spanish").hide();
 $(".english").show();

 english = true;
 spanish = false;

 $(".language_reset").trigger("click");

}); 

$("#lang_spa").click(function() {

 $(".spanish").show();
 $(".english").hide();

 english = false;
 spanish = true;

 $(".language_reset").trigger("click");


}); 
//////////////// overlayer active glow //////////////// 

$(".overlay_pulse").click(function() {

	$(".overlay_pulse").removeClass("language_reset");
	$(".overlay_pulse").css("background-color", "dodgerblue");
	$(".overlay_pulse").css("opacity", "0.75");
	$(this).css("opacity", ".75");
	$(this).css("background-color", "darkorange");
	$(this).addClass("language_reset");

});


/////////////// DRAGBOX MOUSEDOWN ON DRAG ///////////////////

  $("#dragbox").mousedown(function() {
  $("#dragbox").css("box-shadow" , "inset 0px 0px 20px 3px rgba(255,255,255,.75");
  $("#dragbox").css("color" , "white");
});

  $(window).mouseup(function() {
  $("#dragbox").css("box-shadow" , "1px 5px 15px 1px black");
  $("#dragbox").css("color" , "white");
});

//////////// language word changer ///////////////

(function(){
    
    var words = [
        'LANGUAGE',
        'IDIOMA',
        'SPRACHE',
        '语言'
        ], i = 0;

    setInterval(function(){
        $('#changingword').fadeOut(function(){
        $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
       
    }, 2500);

})();



