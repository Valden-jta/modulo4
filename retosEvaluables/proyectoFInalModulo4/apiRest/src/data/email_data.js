const { Email } = require("../models/email");
const { Emails } = require("../models/emails");

let mockData = [
  new Email(
    "email2@example.com",
    "email6@example.com",
    "Subject 1",
    "Message 1"
  ),
  new Email(
    "email10@example.com",
    "email4@example.com",
    "Subject 2",
    "Message 2"
  ),
  new Email(
    "email7@example.com",
    "email9@example.com",
    "Subject 3",
    "Message 3"
  ),
  new Email(
    "email8@example.com",
    "email6@example.com",
    "Subject 4",
    "Message 4"
  ),
  new Email(
    "email6@example.com",
    "email4@example.com",
    "Subject 5",
    "Message 5"
  ),
  new Email(
    "email10@example.com",
    "email2@example.com",
    "Subject 6",
    "Message 6"
  ),
  new Email(
    "email5@example.com",
    "email2@example.com",
    "Subject 7",
    "Message 7"
  ),
  new Email(
    "email7@example.com",
    "email3@example.com",
    "Subject 8",
    "Message 8"
  ),
  new Email(
    "email4@example.com",
    "email1@example.com",
    "Subject 9",
    "Message 9"
  ),
  new Email(
    "email2@example.com",
    "email5@example.com",
    "Subject 10",
    "Message 10"
  ),
  new Email(
    "email3@example.com",
    "email2@example.com",
    "Subject 11",
    "Message 11"
  ),
  new Email(
    "email9@example.com",
    "email5@example.com",
    "Subject 12",
    "Message 12"
  ),
  new Email(
    "email4@example.com",
    "email6@example.com",
    "Subject 13",
    "Message 13"
  ),
  new Email(
    "email4@example.com",
    "email6@example.com",
    "Subject 14",
    "Message 14"
  ),
  new Email(
    "email3@example.com",
    "email9@example.com",
    "Subject 15",
    "Message 15"
  ),
  new Email(
    "email3@example.com",
    "email7@example.com",
    "Subject 16",
    "Message 16"
  ),
  new Email(
    "email4@example.com",
    "email5@example.com",
    "Subject 17",
    "Message 17"
  ),
  new Email(
    "email1@example.com",
    "email4@example.com",
    "Subject 18",
    "Message 18"
  ),
  new Email(
    "email9@example.com",
    "email6@example.com",
    "Subject 19",
    "Message 19"
  ),
  new Email(
    "email2@example.com",
    "email6@example.com",
    "Subject 20",
    "Message 20"
  ),
  new Email(
    "email5@example.com",
    "email8@example.com",
    "Subject 21",
    "Message 21"
  ),
  new Email(
    "email1@example.com",
    "email2@example.com",
    "Subject 22",
    "Message 22"
  ),
  new Email(
    "email3@example.com",
    "email10@example.com",
    "Subject 23",
    "Message 23"
  ),
  new Email(
    "email3@example.com",
    "email2@example.com",
    "Subject 24",
    "Message 24"
  ),
  new Email(
    "email4@example.com",
    "email10@example.com",
    "Subject 25",
    "Message 25"
  ),
  new Email(
    "email6@example.com",
    "email7@example.com",
    "Subject 26",
    "Message 26"
  ),
  new Email(
    "email7@example.com",
    "email3@example.com",
    "Subject 27",
    "Message 27"
  ),
  new Email(
    "email4@example.com",
    "email6@example.com",
    "Subject 28",
    "Message 28"
  ),
  new Email(
    "email10@example.com",
    "email8@example.com",
    "Subject 29",
    "Message 29"
  ),
  new Email(
    "email8@example.com",
    "email9@example.com",
    "Subject 30",
    "Message 30"
  ),
  new Email(
    "email4@example.com",
    "email9@example.com",
    "Subject 31",
    "Message 31"
  ),
  new Email(
    "email5@example.com",
    "email6@example.com",
    "Subject 32",
    "Message 32"
  ),
  new Email(
    "email7@example.com",
    "email6@example.com",
    "Subject 33",
    "Message 33"
  ),
  new Email(
    "email1@example.com",
    "email3@example.com",
    "Subject 34",
    "Message 34"
  ),
  new Email(
    "email3@example.com",
    "email10@example.com",
    "Subject 35",
    "Message 35"
  ),
  new Email(
    "email8@example.com",
    "email4@example.com",
    "Subject 36",
    "Message 36"
  ),
  new Email(
    "email4@example.com",
    "email8@example.com",
    "Subject 37",
    "Message 37"
  ),
  new Email(
    "email6@example.com",
    "email2@example.com",
    "Subject 38",
    "Message 38"
  ),
  new Email(
    "email4@example.com",
    "email10@example.com",
    "Subject 39",
    "Message 39"
  ),
  new Email(
    "email2@example.com",
    "email3@example.com",
    "Subject 40",
    "Message 40"
  ),
  new Email(
    "email6@example.com",
    "email3@example.com",
    "Subject 41",
    "Message 41"
  ),
  new Email(
    "email5@example.com",
    "email2@example.com",
    "Subject 42",
    "Message 42"
  ),
  new Email(
    "email2@example.com",
    "email7@example.com",
    "Subject 43",
    "Message 43"
  ),
  new Email(
    "email9@example.com",
    "email4@example.com",
    "Subject 44",
    "Message 44"
  ),
  new Email(
    "email10@example.com",
    "email3@example.com",
    "Subject 45",
    "Message 45"
  ),
  new Email(
    "email6@example.com",
    "email4@example.com",
    "Subject 46",
    "Message 46"
  ),
  new Email(
    "email5@example.com",
    "email3@example.com",
    "Subject 47",
    "Message 47"
  ),
  new Email(
    "email9@example.com",
    "email5@example.com",
    "Subject 48",
    "Message 48"
  ),
  new Email(
    "email9@example.com",
    "email3@example.com",
    "Subject 49",
    "Message 49"
  ),
  new Email(
    "email10@example.com",
    "email4@example.com",
    "Subject 50",
    "Message 50"
  ),
  new Email(
    "email9@example.com",
    "email7@example.com",
    "Subject 51",
    "Message 51"
  ),
  new Email(
    "email1@example.com",
    "email5@example.com",
    "Subject 52",
    "Message 52"
  ),
  new Email(
    "email8@example.com",
    "email4@example.com",
    "Subject 53",
    "Message 53"
  ),
  new Email(
    "email8@example.com",
    "email7@example.com",
    "Subject 54",
    "Message 54"
  ),
  new Email(
    "email10@example.com",
    "email4@example.com",
    "Subject 55",
    "Message 55"
  ),
  new Email(
    "email2@example.com",
    "email1@example.com",
    "Subject 56",
    "Message 56"
  ),
  new Email(
    "email4@example.com",
    "email7@example.com",
    "Subject 57",
    "Message 57"
  ),
  new Email(
    "email5@example.com",
    "email7@example.com",
    "Subject 58",
    "Message 58"
  ),
  new Email(
    "email9@example.com",
    "email7@example.com",
    "Subject 59",
    "Message 59"
  ),
  new Email(
    "email7@example.com",
    "email1@example.com",
    "Subject 60",
    "Message 60"
  ),
  new Email(
    "email5@example.com",
    "email8@example.com",
    "Subject 61",
    "Message 61"
  ),
  new Email(
    "email9@example.com",
    "email4@example.com",
    "Subject 62",
    "Message 62"
  ),
  new Email(
    "email6@example.com",
    "email9@example.com",
    "Subject 63",
    "Message 63"
  ),
  new Email(
    "email8@example.com",
    "email2@example.com",
    "Subject 64",
    "Message 64"
  ),
  new Email(
    "email1@example.com",
    "email2@example.com",
    "Subject 65",
    "Message 65"
  ),
  new Email(
    "email2@example.com",
    "email3@example.com",
    "Subject 66",
    "Message 66"
  ),
  new Email(
    "email1@example.com",
    "email3@example.com",
    "Subject 67",
    "Message 67"
  ),
  new Email(
    "email5@example.com",
    "email6@example.com",
    "Subject 68",
    "Message 68"
  ),
  new Email(
    "email1@example.com",
    "email2@example.com",
    "Subject 69",
    "Message 69"
  ),
  new Email(
    "email2@example.com",
    "email4@example.com",
    "Subject 70",
    "Message 70"
  ),
  new Email(
    "email1@example.com",
    "email3@example.com",
    "Subject 71",
    "Message 71"
  ),
  new Email(
    "email4@example.com",
    "email8@example.com",
    "Subject 72",
    "Message 72"
  ),
  new Email(
    "email4@example.com",
    "email6@example.com",
    "Subject 73",
    "Message 73"
  ),
  new Email(
    "email9@example.com",
    "email4@example.com",
    "Subject 74",
    "Message 74"
  ),
  new Email(
    "email4@example.com",
    "email7@example.com",
    "Subject 75",
    "Message 75"
  ),
  new Email(
    "email10@example.com",
    "email1@example.com",
    "Subject 76",
    "Message 76"
  ),
  new Email(
    "email2@example.com",
    "email10@example.com",
    "Subject 77",
    "Message 77"
  ),
  new Email(
    "email7@example.com",
    "email2@example.com",
    "Subject 78",
    "Message 78"
  ),
  new Email(
    "email8@example.com",
    "email3@example.com",
    "Subject 79",
    "Message 79"
  ),
  new Email(
    "email4@example.com",
    "email10@example.com",
    "Subject 80",
    "Message 80"
  ),
  new Email(
    "email9@example.com",
    "email1@example.com",
    "Subject 81",
    "Message 81"
  ),
  new Email(
    "email4@example.com",
    "email7@example.com",
    "Subject 82",
    "Message 82"
  ),
  new Email(
    "email9@example.com",
    "email8@example.com",
    "Subject 83",
    "Message 83"
  ),
  new Email(
    "email6@example.com",
    "email4@example.com",
    "Subject 84",
    "Message 84"
  ),
  new Email(
    "email7@example.com",
    "email8@example.com",
    "Subject 85",
    "Message 85"
  ),
  new Email(
    "email10@example.com",
    "email3@example.com",
    "Subject 86",
    "Message 86"
  ),
  new Email(
    "email6@example.com",
    "email4@example.com",
    "Subject 87",
    "Message 87"
  ),
  new Email(
    "email4@example.com",
    "email9@example.com",
    "Subject 88",
    "Message 88"
  ),
  new Email(
    "email6@example.com",
    "email3@example.com",
    "Subject 89",
    "Message 89"
  ),
  new Email(
    "email3@example.com",
    "email9@example.com",
    "Subject 90",
    "Message 90"
  ),
  new Email(
    "email2@example.com",
    "email7@example.com",
    "Subject 91",
    "Message 91"
  ),
  new Email(
    "email6@example.com",
    "email3@example.com",
    "Subject 92",
    "Message 92"
  ),
  new Email(
    "email3@example.com",
    "email8@example.com",
    "Subject 93",
    "Message 93"
  ),
  new Email(
    "email9@example.com",
    "email8@example.com",
    "Subject 94",
    "Message 94"
  ),
  new Email(
    "email5@example.com",
    "email3@example.com",
    "Subject 95",
    "Message 95"
  ),
  new Email(
    "email8@example.com",
    "email9@example.com",
    "Subject 96",
    "Message 96"
  ),
  new Email(
    "email3@example.com",
    "email4@example.com",
    "Subject 97",
    "Message 97"
  ),
  new Email(
    "email3@example.com",
    "email10@example.com",
    "Subject 98",
    "Message 98"
  ),
  new Email(
    "email9@example.com",
    "email2@example.com",
    "Subject 99",
    "Message 99"
  ),
  new Email(
    "email5@example.com",
    "email9@example.com",
    "Subject 100",
    "Message 100"
  ),
];

let allEmails = new Emails();
mockData.forEach((email) => allEmails.addEmail(email));

module.exports = { allEmails };
