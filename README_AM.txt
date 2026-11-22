WEYBLA MEMBER - ANDROID APK BUILD

ይህ ፕሮጀክት የተሰጠውን Weybla_Member_App_v58_PDF_FIX.html በCapacitor Android ውስጥ ያስቀምጣል።

APK ለመገንባት የሚያስፈልጉት:
- Node.js LTS
- Android Studio (Android SDK እና Build Tools ጨምሮ)

በኮምፒውተር ላይ:
1. ZIP ፋይሉን Extract ያድርጉ።
2. የWeybla_Capacitor ፎልደርን በTerminal/CMD ይክፈቱ።
3. npm install
4. npx cap add android   (android ፎልደር ከሌለ ብቻ)
5. npx cap sync android
6. npx cap open android
7. Android Studio ሲከፈት Build > Build Bundle(s) / APK(s) > Build APK(s) ይምረጡ።

APK በ android/app/build/outputs/apk/debug/app-debug.apk ውስጥ ይገኛል።

ማስታወሻ:
- ይህ የመጀመሪያ Capacitor project scaffold ነው፤ በዚህ አካባቢ Android SDK ስላልተገኘ APK እዚህ ላይ መገንባት አልተቻለም።
- የHTML ፋይሉ ዋና ይዘት አልተቀየረም። Firebase/Cloudinary እና ካርታ የመሳሰሉ የኢንተርኔት ባህሪያት ኢንተርኔት ይፈልጋሉ።

ስልክ ብቻ ካለህ (GitHub በመጠቀም):
1. ZIP ፋይሉን አውርድና Extract/Unzip አድርግ።
2. github.com ላይ ነፃ መለያ ክፈት/ግባ።
3. New repository ፍጠር።
4. የZIP ውስጡን ፋይሎች ሁሉ ወደ repository ጫን፤ .github ፎልደሩንም አትተወው።
5. Repository > Actions > Build Weybla APK > Run workflow ተጫን።
6. ስራው ከተሳካ በኋላ Actions ውስጥ የተጠናቀቀውን run ክፈት፤ Artifacts ስር Weybla-Member-debug-APK አውርድ።
7. ZIP ፋይሉን ክፈትና app-debug.apk ጫን።

ማስታወሻ: GitHub ላይ የሚገነባው Debug APK ነው። በመጀመሪያ ስልክህ ላይ ለመሞከር ይህ በቂ ነው።
