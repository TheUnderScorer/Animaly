cd ./ios
xcodebuild -workspace Animaly.xcworkspace -scheme Animaly archive -archivePath Animaly.xcarchive -allowProvisioningUpdates
xcodebuild -exportArchive -archivePath ./Animaly.xcarchive -exportPath . -exportOptionsPlist Animaly/Info.plist
