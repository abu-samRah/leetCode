var MyCalendar = function() {
  this.cal = []
};


MyCalendar.prototype.book = function(start, end) {
    if(!this.cal.length) this.cal.push([start,end])
    else{
        for(let i=0; i<this.cal.length; i++){
            const [s,e] = this.cal[i]
            if(s < end && start < e ) return false
        }
        this.cal.push([start,end])
    }
  return true
};