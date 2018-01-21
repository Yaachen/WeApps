//var initvalues = 'mytest ststic';
var initValues = '';


Page({
    data:{
        images:[
               "images/iaa01.jpg",
               "images/iaa02.jpg",
               "images/iaa03.jpg",
               "images/iaa04.jpg",
        ],
        text: initValues,
    },
   
  onShow: function() {
    // Do something when page show.
    var thispage = this;
       wx.getStorage({
                key: 'initValues',
                success: function(res){
                    // success
                if ( res.data != '' )
                {
                    thispage.setData ({
                    text: res.data
                })}
                else
                {
                       wx.request({
                         url: 'http://localhost:8080/Rest4Java/rest/customers/javatest',
                         data: {},
                         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                         // header: {}, // 设置请求的 header
                         success: function(res){
                                  // success
                                console.log('******************'+res.data);
                                  thispage.setData ({
                                        text: res.data
                                    })
                                    wx.setStorage(
                                        {
                                            key:"initValues",
                                            data:res.data
                                        }
                                    )

                                
                             },
         
                    fail: function() {
                        // fail
                        console.log('respose is fail')
                    },
                    complete: function() {
                        // complete
                    }
                    })
                }
                },
                fail: function() {
                    // fail
              
                },
                complete: function() {
                    // complete
                }
            })

  
   //initValues = 'Changed Text'

  },
    
})