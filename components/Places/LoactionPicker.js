import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constrants/colors";
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from "expo-location";
import { useState } from "react";
import getMapPreview from "../../util/loaction";

function LocationPicker(){
    const [pickedLocation, setPickedLocation] = useState();
    const [loactionPermissioninformation, requestPermission]= useForegroundPermissions();

    async function verifyPermission(){
        if(loactionPermissioninformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            console.log(permissionResponse)
            return permissionResponse.granted;
        }
        
        if(loactionPermissioninformation.status === PermissionStatus.DENIED){
            Alert.alert("Insufficient Permissions!", 'You need to grant camera permissions to use this app.');
            return false;
        }

        return true;
    }

    async function getLocationHandler(){
        const hasPermission = await verifyPermission();

        if(!hasPermission){
            return;
        }


        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        });
        console.log(location);
    }
    function pickOnMapHandler(){
        
    }

    let locationPreview = <Text>No location picked yet.</Text>;

    if(pickedLocation){
        locationPreview =  <Image style={styles.image} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}} />;
    }
 return <View>
    <View style={styles.mapPreview}>
       {locationPreview}
    </View>
    <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>Loacte User</OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
    </View>
 </View>
}
export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview:{
        width:'100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions:{
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    }, 
    image:{
        width: '100%',
        height: '100%'
    }
})