import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer 1RD8w1efw27pbpLd1i0XogYetEPU0rLMJjxhj_tAuerFcoi2RnJAAk7YgKGe3EteKKxaXV5gqdJwfYKh1boklksSrKRHSnDzFUqRaTvTqK4F5mTuu2XlvGhN3P-OX3Yx"
	}
});
