const stopwords = ["a", "an", "and", "the", "is", "in", "at", "of", "on", "for", "with", "as", "by", "to", "or", "but"];

function getWords(text) {
    // Use a regular expression to match words, including hyphenated and apostrophes
    // const words = text.match(/\b[\w'-]+\b/g) || []; // Include number
    const words = text.match(/\b[A-Za-z'-]+\b/g) || []; // Exclude number

    // Filter out stopwords
    const filteredWords = words.filter(word => !stopwords.includes(word.toLowerCase()));

    return filteredWords;
}

export default getWords;