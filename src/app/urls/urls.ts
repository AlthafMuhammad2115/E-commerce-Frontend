//backend link
const BASE_URL="http://localhost:3000"

//routes
export const PRODUCT_URL=BASE_URL+"/api/products"
export const USER_URL=BASE_URL+"/api/user"
export const ADMIN_URL=BASE_URL+"/api/admin"
export const CART_URL=BASE_URL+"/api/cart"
export const WISHLIST_URL=BASE_URL+"/api/wishlist";
export const ADDRESS_URL=BASE_URL+"/api/address"
export const ORDER_URL=BASE_URL+"/api/orders"

//user
export const LOGIN_URL=USER_URL+"/login"
export const SIGNUP_URL=USER_URL+"/SignUp"

//admin
export const ADMINLOGIN_URL=ADMIN_URL+"/login"
export const ADMINSIGNUP_URL=ADMIN_URL+"/signup"

//cart
export const SETCART_URL=CART_URL+"/setCart"
export const GETCART_URL=CART_URL+"/getCart/"
export const DELETEFROMCART_URL=CART_URL+'/deleteCartItem/'
export const DELETEALLFROMCART_URL=CART_URL+'/deleteCartAllItem/'

//wishlist
export const SETWISHLIST_URL=WISHLIST_URL+"/setWishlist/"
export const GETWISHLIST_URL=WISHLIST_URL+"/getWishlist/"
export const DELETEWISHLIST_URL=WISHLIST_URL+"/deleteWishlist/"

//product
export const GETPRODUCT_URL=PRODUCT_URL+"/GetAllProducts"
export const SETPRODUCT_URL=PRODUCT_URL+"/setProducts"
export const DELETEPRODUCT_URL=PRODUCT_URL+"/deleteProducts/"
export const EDITPRODUCT_URL=PRODUCT_URL+"/editProducts/"

//address
export const SETADDRESS_URL=ADDRESS_URL+"/setAddress/"
export const EDITADDRESS_URL=ADDRESS_URL+"/editAddress/"
export const GETADDRESS_URL=ADDRESS_URL+"/getAddress/"
export const DELETEADDRESS_URL=ADDRESS_URL+"/deleteAddress/"

// orders
export const RAZORPAY_URL=ORDER_URL+"/razorpay"
export const RAZORPAY_VERIFICATION_URL=ORDER_URL+"/orderVerification/"