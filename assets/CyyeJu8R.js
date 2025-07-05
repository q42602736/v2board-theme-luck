function getDeviceInfo() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const userAgent = navigator.userAgent.toLowerCase();
  const touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTabletUA = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
  const isMobileScreen = screenWidth <= 768;
  const isTabletScreen = screenWidth > 768 && screenWidth <= 1024;
  const isMobile = isMobileUA && !isTabletUA || isMobileScreen && touchSupport;
  const isTablet = isTabletUA || isTabletScreen && touchSupport;
  const isDesktop = !isMobile && !isTablet;
  const orientation = screenWidth > screenHeight ? "landscape" : "portrait";
  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    userAgent,
    touchSupport,
    orientation
  };
}
function shouldUseMobileLayout() {
  const device = getDeviceInfo();
  if (device.isMobile) return true;
  if (device.isTablet && device.orientation === "portrait" && device.screenWidth <= 768) {
    return true;
  }
  if (device.isDesktop && device.screenWidth <= 768) {
    return true;
  }
  return false;
}
function watchDeviceChange(callback) {
  let currentUseMobile = shouldUseMobileLayout();
  const handleResize = () => {
    const newUseMobile = shouldUseMobileLayout();
    if (newUseMobile !== currentUseMobile) {
      currentUseMobile = newUseMobile;
      callback(newUseMobile);
    }
  };
  const handleOrientationChange = () => {
    setTimeout(handleResize, 100);
  };
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleOrientationChange);
  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("orientationchange", handleOrientationChange);
  };
}
export {
  shouldUseMobileLayout as s,
  watchDeviceChange as w
};
