from data.functions import *
post_count = 0 # define the variable and set to 0
post_count_jan_apr = 0
post_count_may_aug = 0
post_count_sep_dec = 0
sept_posts = get_posts_in_range_by("Evilcorp", "2022-09-01", "2022-10-01")
jan_april_posts = get_posts_in_range_by("Evilcorp", "2022-01-01", "2022-05-01")
post_count_may_aug = get_posts_in_range_by("Evilcorp", "2022-05-01", "2022-09-01")
post_count_sep_dec = get_posts_in_range_by("Evilcorp", "2022-09-01", "2023-01-01")

for post in sept_posts:
    post_count = post_count + 1

for post in jan_april_posts:
    post_count_jan_apr = post_count_jan_apr + 1

for post in post_count_may_aug:
    post_count_may_aug = post_count_may_aug + 1

for post in post_count_sep_dec:
    post_count_sep_dec = post_count_sep_dec + 1

print(post_count)
print(post_count_jan_apr)
print(post_count_may_aug)
print(post_count_sep_dec)