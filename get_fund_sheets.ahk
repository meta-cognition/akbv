#Requires AutoHotkey v2.0

folder := A_Now
outputDir := A_ScriptDir . "\legfin\" . folder
DirCreate(outputDir)

SetWorkingDir(A_ScriptDir)
url := "https://www.legfin.akleg.gov/FundCodes/showFundCodesList.php?q=&sortBy=Group&active=&sweepable=A&fundGroup=0&sid=" . Random()

; Download the webpage content
tempFile := outputDir . "\page.html"
Download(url, tempFile)

; Read the content of the page
html := FileRead(tempFile)

; This pattern captures href with single quotes, double quotes, or no quotes
pattern := "(?i)<a\s+(?:[^>]*?\s+)?href=(?:'([^']*)'|`"([^`"]*)`"|([^>\s]+))[^>]*>(.*?)<\/a>"

; Initialize starting position for searching
pos := 1

; Create an object to hold match results
match := {}

; Initialize an array to store all matches
matches := []

; Loop through all matches in the HTML string
while pos := RegExMatch(html, pattern, &match, pos)
{
    ; Extract href from the correct capturing group
    if (match[1] != "")
        href := match[1]
    else if (match[2] != "")
        href := match[2]
    else
        href := match[3]
    
    innerText := match[4]
    
    ; Optionally, remove any HTML tags from innerText
    innerText := RegExReplace(innerText, "<[^>]+>", "")
    
    ; Add the extracted data to the matches array
    matches.Push({ href: href, text: innerText })
    
    ; Move the position forward to continue searching
    pos += StrLen(match[0])
}

; Iterate through the array and display all matches
for eachMatch in matches
{
    url :=  "https://www.legfin.akleg.gov/" . eachMatch.href
    filename := fileName := outputDir . "\" . eachMatch.Text . ".pdf"
    Download(url,filename)
    Tooltip("Downloaded: " fileName)
    Sleep(700) ; Avoid overwhelming the server
 
}
