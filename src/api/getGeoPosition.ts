export const getGeoPosition = (successCallback: PositionCallback, errorCallback: PositionErrorCallback) => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}
