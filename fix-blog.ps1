$file = "c:\Users\Jimen\OneDrive\Desktop\Website-main\app\blog\[id]\blogEntries.ts"
$content = Get-Content $file
# Fix line 57 - add 3 spaces at the beginning
$content[56] = $content[56] -replace '^      \{', '          {'
# Fix lines 58-64 - add 2 spaces at the beginning
for ($i = 57; $i -le 63; $i++) {
    $content[$i] = '  ' + $content[$i]
}
# Fix line 65 - add 3 spaces at the beginning
$content[64] = $content[64] -replace '^      \}', '          }'
$content | Set-Content $file
Write-Host "Fixed indentation"
