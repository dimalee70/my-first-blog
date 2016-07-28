from django import forms
from .models import Post, Comment
from nocaptcha_recaptcha.fields import NoReCaptchaField

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'text',)
class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('author','text',)

class CaptchaForm(forms.Form):
    captcha = NoReCaptchaField()
