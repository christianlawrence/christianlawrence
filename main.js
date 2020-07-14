function check(){
    var portable_chargers = document.quiz.portable_chargers.value;
    var cheese = document.quiz.cheese.value;
    var christmas_markets = document.quiz.christmas_markets.value;
    var banana_bread = document.quiz.banana_bread.value;
    var calamari = document.quiz.calamari.value;
    var true_crime = document.quiz.true_crime.value;
    var high_waisted_jeans = document.quiz.high_waisted_jeans.value;
    var winter_wonderland = document.quiz.winter_wonderland.value;
    var fairy_lights = document.quiz.fairy_lights.value;
    var the_brunch_life = document.quiz.the_brunch_life.value;
    var pink_gin = document.quiz.pink_gin.value;
    var gavin_stacey = document.quiz.gavin_stacey.value;
    var positive_vibes = document.quiz.positive_vibes.value;
    var river_island = document.quiz.river_island.value;
    var pornstar_martinis = document.quiz.pornstar_martinis.value;
    var ms_food = document.quiz.ms_food.value;
    var love_island = document.quiz.love_island.value;
    var vegetable_crisps = document.quiz.vegetable_crisps.value;
    var milk_alternatives = document.quiz.milk_alternatives.value;
    var daily_mail = document.quiz.daily_mail.value;
    var disney = document.quiz.disney.value;
    var free_drugs = document.quiz.free_drugs.value;
    var menthol_cigarettes = document.quiz.menthol_cigarettes.value;
    var loungwear = document.quiz.loungwear.value;
    var glitter = document.quiz.glitter.value;
    var correct = 0;

    if (portable_chargers == "yes") {
        correct += 4;
    }
    if (cheese == "yes") {
        correct += 4;
    }
    if (christmas_markets == "yes") {
        correct += 4;
    }
    if (banana_bread == "yes") {
        correct += 4;
    }
    if (calamari == "yes") {
        correct += 4;
    }
    if (true_crime == "yes") {
        correct += 4;
    }
    if (high_waisted_jeans == "yes") {
        correct += 4;
    }
    if (winter_wonderland == "yes") {
        correct += 4;
    }
    if (fairy_lights == "yes") {
        correct += 4;
    }
    if (the_brunch_life == "yes") {
        correct += 4;
    }
    if (pink_gin == "yes") {
        correct += 4;
    }
    if (gavin_stacey == "yes") {
        correct += 4;
    }
    if (positive_vibes == "yes") {
        correct += 4;
    }
    if (river_island == "yes") {
        correct += 4;
    }
    if (pornstar_martinis == "yes") {
        correct += 4;
    }
    if (ms_food == "yes") {
        correct += 4;
    }
    if (love_island == "yes") {
        correct += 4;
    }
    if (vegetable_crisps == "yes") {
        correct += 4;
    }
    if (milk_alternatives == "yes") {
        correct += 4;
    }
    if (daily_mail == "yes") {
        correct += 4;
    }
    if (disney == "yes") {
        correct += 4;
    }
    if (free_drugs == "yes") {
        correct += 4;
    }
    if (menthol_cigarettes == "yes") {
        correct += 4;
    }
    if (loungwear == "yes") {
        correct += 4;
    }
    if (glitter == "yes") {
        correct += 4;
    }

    document.getElementById("number_correct").innerHTML = "You are " + correct + "% BASIC BITCH!!!";
}