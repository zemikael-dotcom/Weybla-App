ወይቤላ — Capacitor Android ፕሮጀክት

የመጀመሪያው www/index.html በውስጡ ተጠብቋል፤ ዲዛይኑና የድረ-ገጽ ኮዱ አልተቀየረም።

ፋይል መምረጥ/መጫን:
- HTML ውስጥ 15 የ file input መስኮቶች ተገኝተዋል።
- የክፍያ ደረሰኞች፣ የመታወቂያ ሰነዶች እና ሌሎች ፋይሎችን ለመምረጥ የተዘጋጁ ናቸው።
- ኮዱ Cloudinary ላይ ፋይል ይጭናል። የአፑ የፋይል ማስጫኛ ባህሪ በተለያዩ Android ስልኮች ላይ መፈተሽ ያስፈልጋል።
- ይህ ከመሣሪያው ወደ አፑ ፋይል መምረጥ/መጫን ነው፤ ከአፑ ወደ ሌላ ሰው ፋይል መላክ (share) የተለየ ባህሪ ነው።

APK ለመገንባት:
1. ይህን ZIP ወደ GitHub repository አስገባ።
2. GitHub > Actions > Build Weybla Android APK > Run workflow ጫን።
3. ሲጨርስ Weybla-debug-apk artifact አውርድ።

በኮምፒውተር ላይ በእጅ:
  npm install
  npx cap add android
  npx cap sync android
  cd android && ./gradlew assembleDebug

Package ID: com.weybla.member
App name: Weybla

ማስታወሻ: ይህ source project ነው፤ APK አልተገነባም። Android build በGitHub Actions ወይም Android Studio ይፈጠራል።
