function getBotResponse(input) {
    //rock paper scissors
    if (input === "kambar") {
        return "kamba ramayanam";
    } else if (input === "thiruvalluvar") {
        return "thirukural";
    } else if (input === "Ministry of fisheries") {
        return "Handbook on Fisheries Statistics – 2018";
    }
    if (input === "Vladimir Nabokov") {
        return "1.Lolita,2.Pale Fire";
    } else if (input === "F. Scott Fitzgerald") {
        return "The Great Gatsby";
    } else if (input === "Marcel Proust"){
        return "In Search of Lost Time";
    }
    if (input === "william Shakespeare") {
        return "Shakespeare's sonnets,tragicomedies,Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth";
    } else if (input === "Leo Tolstoy") {
        return "War and Peace (1869) , Anna Karenina (1878) ,Sevastopol Sketches (1855)\"";
    } else if (input === "Adi Shankaracharya"){
        return "Vivekadeepini";
    }
    else if (input === "hi"){
        return "HI NETHAJI.C MCA";
    }

    // Simple responses
    if (input == "hello" || "Hello" || "hi" || "Hi") {
        return "Hello there! How may I help you";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }



}